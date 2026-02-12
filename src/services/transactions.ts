import { prisma } from "@/lib/prisma"

export type GroupedTransactions = Record<string, Awaited<ReturnType<typeof getRawTransactions>>>

async function getRawTransactions(year: number, month: number) {
    const start = new Date(Date.UTC(year, month - 1, 1))
    const end = new Date(Date.UTC(year, month, 1))

    return await prisma.transaction.findMany({
        where: {
            date: { gte: start, lt: end }
        },
        include: {
            category: {
                include: { parent: true }
            }
        },
        orderBy: { date: 'desc' }
    })
}

export async function getDailyHistory(year: number, month: number) {
    const rawData = await getRawTransactions(year, month)

    const grouped = rawData.reduce((acc, transaction) => {
        const dateKey = transaction.date.toISOString().split('T')[0]
        
        if (!acc[dateKey]) {
            acc[dateKey] = []
        }
        
        acc[dateKey].push(transaction)
        return acc
    }, {} as GroupedTransactions)

    return grouped
}