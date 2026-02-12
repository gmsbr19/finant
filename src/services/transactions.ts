import { prisma } from "@/lib/prisma"

export async function getDailyHistory(year: number, month: number) {
    const result = await prisma.transaction.findMany({
        where: {
            date: {
                gte: new Date(year, month - 1, 1),
                lt: new Date(year, month, 1),
            }
        },
        include: {
            category: true,
        },
        orderBy: {
            date: 'desc',
        }
    })

    return result
}