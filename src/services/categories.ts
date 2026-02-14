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
