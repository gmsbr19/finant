import { prisma } from "@/lib/prisma"
import { getMonthDateInterval } from "@/utils/helpers"
import { $Enums } from "@/generated"

export async function getTransferTypeTotals(
    year: number,
    month: number,
    type: $Enums.TransactionType,
): Promise<{ settled: number; expected: number }> {
    const { start, end } = getMonthDateInterval(year, month)

    const transactionsByStatus = await prisma.transaction.groupBy({
        by: "isPaid",
        _sum: {
            amount: true,
        },
        where: {
            date: {
                gte: start,
                lt: end,
            },
            type,
        },
    })

    const totalGrouped = transactionsByStatus.reduce<Record<string, number>>(
        (acc, current) => {
            const chave = String(current.isPaid)
            const valor = current._sum.amount?.toNumber() ?? 0

            acc[chave] += valor

            return acc
        },
        { true: 0, false: 0 },
    )

    const settled = totalGrouped.true
    const expected = totalGrouped.true + totalGrouped.false

    return { settled, expected }
}

export async function getCategories(year: number, month: number) {
    const { start, end } = getMonthDateInterval(year, month)
    const transactionsByChild = await prisma.transaction.groupBy({
        by: ["categoryId", "isPaid"],
        _sum: { amount: true },
        where: {
            date: { gte: start, lt: end },
        },
    })

    const categories = await prisma.category.findMany({
        select: {
            id: true,
            parentId: true,
            name: true,
            monthlyBudget: true,
            color: true,
            parent: {
                select: {
                    name: true,
                    monthlyBudget: true,
                    color: true,
                },
            },
        },
    })

    const categoryMap = new Map(categories.map((c) => [c.id, c]))

    type CategorySummary = {
        name: string
        available: number
        spent: number
        budget: number
        color: string
        status: "normal" | "warning" | "danger"
    }

    const report: Record<string, CategorySummary> = {}

    categories.forEach(cat => {
        const isParent = !cat.parentId;
        if (isParent && !report[cat.name]) {
             report[cat.name] = {
                name: cat.name,
                available: Number(cat.monthlyBudget || 0),
                spent: 0,
                budget: Number(cat.monthlyBudget || 0),
                color: cat.color || "#ccc",
                status: "normal"
            }
        }
    })

    for (const group of transactionsByChild) {
        const category = categoryMap.get(group.categoryId as number)
        if (!category) continue

        const parentData = category.parent ?? category
        const parentName = parentData.name

        // Se por algum motivo não foi inicializado acima (ex: acabou de criar)
        if (!report[parentName]) {
            report[parentName] = { 
                name: parentName,
                available: Number(parentData.monthlyBudget || 0), 
                spent: 0, 
                budget: Number(parentData.monthlyBudget || 0),
                color: parentData.color || "#ccc",
                status: "normal"
            }
        }

        const amount = Number(group._sum.amount || 0)
        report[parentName].spent += amount
        report[parentName].available -= amount
    }

    return report
}
