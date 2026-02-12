import { TransactionType, AccountType } from "@/generated"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

import { prisma } from "@/lib/prisma"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// --- CONFIGURAÇÃO MENTAL ---
// [S] Survival: O que preciso para viver/trabalhar
// [L] Eudaimonia: O que gasto para viver bem
// [R] Resiliência: O que gasto para garantir o futuro (Dívidas + Reservas)

const CATEGORY_MAP: Record<string, "S" | "L" | "R"> = {
    Alimentação: "S",
    Transporte: "S",
    Saúde: "S",
    Educação: "S",
    Serviços: "S",
    Moradia: "S",
    Fatura: "R", // Nubank entra aqui como Amortização
    Lazer: "L",
    Compras: "L",
    Presentes: "L",
}

const MONTH_MAP: Record<string, string> = {
    January: "2026-01-01",
    February: "2026-02-01",
    March: "2026-03-01",
    April: "2026-04-01",
    May: "2026-05-01",
    June: "2026-06-01",
    July: "2026-07-01",
    August: "2026-08-01",
    September: "2026-09-01",
    October: "2026-10-01",
    November: "2026-11-01",
    December: "2026-12-01",
}

const parseAmount = (value: string): number => {
    const clean = value
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()
    return parseFloat(clean)
}

const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split("/")
    return new Date(`${year}-${month}-${day}T00:00:00Z`)
}

async function main() {
    console.log("🌱 Iniciando Seed (Modo: C6 + Amortização Nubank)...")

    // 1. Limpeza
    await prisma.transaction.deleteMany()
    await prisma.category.deleteMany()
    await prisma.account.deleteMany()
    await prisma.goal.deleteMany()

    // 2. Criar Contas (Atualizado para sua realidade)
    const c6Account = await prisma.account.create({
        data: { name: "C6 Bank", type: AccountType.BANK, initialBalance: 0 },
    })

    // Cartão Genérico (Serve para o C6 Crédito e as compras no cartão do namorado)
    const creditCard = await prisma.account.create({
        data: {
            name: "Cartão de Crédito",
            type: AccountType.CREDIT_CARD,
            initialBalance: 0,
        },
    })

    // 3. Criar Categorias Mestras
    const catSurvival = await prisma.category.create({
        data: { name: "[S] Survival", monthlyBudget: 2264.7 },
    })
    const catEudaimonia = await prisma.category.create({
        data: { name: "[L] Eudaimonia", monthlyBudget: 1000 },
    })
    const catResilience = await prisma.category.create({
        data: { name: "[R] Resiliência", monthlyBudget: 999999 },
    })

    const rootCats = { S: catSurvival, L: catEudaimonia, R: catResilience }
    const subCategoryCache: Record<string, number> = {}

    // 4. Processar CSV
    const csvFilePath = path.join(__dirname, "../expenses.csv")
    const fileContent = fs.readFileSync(csvFilePath, "utf-8")
    const rows = fileContent.split("\n").filter((row) => row.trim() !== "")
    const dataRows = rows.slice(1)

    for (const row of dataRows) {
        const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
        if (!matches) continue

        const cleanRow = matches.map((m) => m.replace(/^"|"$/g, "").trim())
        const [source, amountStr, dateStr, monthRaw, situacao, tag, tipo] =
            cleanRow

        if (!source || !amountStr) continue

        const amount = parseAmount(amountStr)
        const date = parseDate(dateStr)
        const monthName = monthRaw.split(" ")[0].trim()
        const competenceDate = new Date(
            MONTH_MAP[monthName] || new Date().toISOString(),
        )
        const isPaid = situacao === "Pago"

        // LÓGICA DE CATEGORIZAÇÃO
        let categoryId: number | null = null
        let rootType: "S" | "L" | "R" = CATEGORY_MAP[tag] || "S"

        // Se for Nubank/Fatura, forçamos [R] Resiliência
        if (tag === "Fatura" || source.toLowerCase().includes("nubank")) {
            rootType = "R"
        }

        // Cria/Busca Subcategoria
        const subName = tag === "Fatura" ? "Amortização Dívida" : tag

        if (!subCategoryCache[subName]) {
            const newSub = await prisma.category.create({
                data: { name: subName, parentId: rootCats[rootType].id },
            })
            subCategoryCache[subName] = newSub.id
        }
        categoryId = subCategoryCache[subName]

        // LÓGICA DE TRANSAÇÃO
        if (tipo === "Crédito") {
            // Compra no Cartão (C6 ou Namorado) -> Aumenta fatura atual
            await prisma.transaction.create({
                data: {
                    description: source,
                    amount,
                    date,
                    competenceDate,
                    type: TransactionType.EXPENSE,
                    fromAccId: creditCard.id, // Dívida "a vencer"
                    categoryId,
                    isPaid: isPaid,
                },
            })
        } else {
            // Débito C6 (Inclui pagamentos ao Nubank)
            await prisma.transaction.create({
                data: {
                    description: source,
                    amount,
                    date,
                    competenceDate, // Se for Nubank, a competência é o mês que você decidiu amortizar
                    type: TransactionType.EXPENSE,
                    fromAccId: c6Account.id, // Sai dinheiro da conta
                    categoryId,
                    isPaid: isPaid,
                },
            })
        }
    }

    // 5. Metas
    await prisma.goal.create({
        data: {
            name: "Reserva de Emergência",
            targetAmount: 15000,
            currentAmount: 2000,
            priority: 1,
        },
    })
    await prisma.goal.create({
        data: {
            name: "Monitor Novo",
            targetAmount: 5000,
            currentAmount: 0,
            priority: 3,
        },
    })

    console.log("✅ Seed finalizado! Nubank classificado como [R] Resiliência.")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
