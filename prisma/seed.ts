import { TransactionType, AccountType } from "@/generated"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { parse } from "csv-parse/sync" // Parser robusto

import { prisma } from "@/lib/prisma"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface CsvRecord {
    Source: string
    Amount: string
    Date: string
    Month: string
    Tags: string
    Tipo: string
    Situação: string
}

// Mapeamento atualizado: Fatura agora entra no Survival [S] como obrigação
const CATEGORY_MAP: Record<string, "S" | "L" | "R"> = {
    Alimentação: "S",
    Transporte: "S",
    Saúde: "S",
    Educação: "S",
    Serviços: "S",
    Moradia: "S",
    Fatura: "S", // <--- Mudança aqui
    Lazer: "L",
    Compras: "L",
    Presentes: "L",
}

const MONTH_MAP: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
}

async function main() {
    console.log("🧹 Limpando banco e reiniciando seed...")
    await prisma.transaction.deleteMany()
    await prisma.category.deleteMany()
    await prisma.account.deleteMany()
    await prisma.goal.deleteMany()

    const c6 = await prisma.account.create({
        data: { name: "C6 Bank", type: AccountType.BANK, initialBalance: 0 },
    })
    const credit = await prisma.account.create({
        data: {
            name: "Cartão",
            type: AccountType.CREDIT_CARD,
            initialBalance: 0,
        },
    })

    const root = {
        S: await prisma.category.create({
            data: { name: "[S] Survival", monthlyBudget: 2264.7 },
        }),
        L: await prisma.category.create({
            data: { name: "[L] Eudaimonia", monthlyBudget: 1000.0 },
        }),
        R: await prisma.category.create({
            data: { name: "[R] Resiliência", monthlyBudget: 999999 },
        }),
    }

    const csvContent = fs.readFileSync(
        path.join(__dirname, "../expenses.csv"),
        "utf-8",
    )
    const records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        bom: true,
    }) as CsvRecord[]

    const subCache: Record<string, number> = {}

    for (const record of records) {
        const { Source, Amount, Date: dateStr, Month, Tags, Tipo } = record
        const amount = parseFloat(
            Amount.replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim(),
        )

        // Parsing da Data Real
        const [d, m, y] = dateStr.split("/")
        const actualDate = new Date(
            Date.UTC(Number(y), Number(m) - 1, Number(d)),
        )

        // Parsing da Competência (A chave do seu problema)
        const monthName = Month.split(" ")[0].trim()
        const competenceDate = new Date(Date.UTC(2026, MONTH_MAP[monthName], 1))

        const rootType = CATEGORY_MAP[Tags] || "S"
        if (!subCache[Tags]) {
            const sub = await prisma.category.create({
                data: { name: Tags, parentId: root[rootType].id },
            })
            subCache[Tags] = sub.id
        }

        await prisma.transaction.create({
            data: {
                description: Source || "Sem descrição", // Garantia extra contra nulos
                amount,
                date: actualDate,
                competenceDate,
                type: TransactionType.EXPENSE,
                fromAccId: Tipo === "Crédito" ? credit.id : c6.id,
                categoryId: subCache[Tags],
                isPaid: true,
            },
        })
    }
    console.log("✅ Seed finalizado com datas de competência reais!")
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
