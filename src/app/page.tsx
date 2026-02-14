import * as styles from "./page.css"
import { getDailyHistory } from "@/services/transactions"
import { HistoryTransaction } from "@/components/HistoryTransaction/HistoryTransaction"
import { getTransactionVariant } from "@/utils/helpers"
import { formatCurrency } from "@/utils/format"
import HomeCardContainer from "@/components/Dashboard/HomeCardContainer/HomeCardContainer"
import CategoryHomeCard, {
    CategoryHomeCardProps,
} from "@/components/CategoryHomeCard/CategoryHomeCard"

export default async function Home() {
    const groupedTransactions = await getDailyHistory(2026, 2)
    const days = Object.keys(groupedTransactions)

    const categoryCards: CategoryHomeCardProps[] = [
        {
            currentValue: 2000,
            maxValue: 2500,
            variant: "survival",
        },
        {
            currentValue: 543,
            maxValue: 450,
            variant: "eudaimonia",
        },
        {
            currentValue: 234,
            maxValue: 700,
            variant: "resilience",
        },
    ]

    const moneyCards: CategoryHomeCardProps[] = [
        {
            currentValue: 3500,
            maxValue: 3500,
            variant: 'income'
        },
        {
            currentValue: 2777,
            maxValue: 3400,
            variant: 'expenses'
        }
    ]

    return (
        <div className={styles.background}>
            <h1 className={styles.title}>Dashboard</h1>
            <HomeCardContainer colNums={2}>
                {moneyCards.map((c) => (
                    <CategoryHomeCard
                        currentValue={c.currentValue}
                        maxValue={c.maxValue}
                        variant={c.variant}
                    />
                ))}
            </HomeCardContainer>
            <HomeCardContainer colNums={3}>
                {categoryCards.map((c) => (
                    <CategoryHomeCard
                        currentValue={c.currentValue}
                        maxValue={c.maxValue}
                        variant={c.variant}
                    />
                ))}
            </HomeCardContainer>
            <h1 className={styles.title}>Histórico</h1>
            <div className={styles.timeline}>
                {days.map((day) => (
                    <div key={day} className={styles.transactionsContainer}>
                        <h3 className={styles.dateLabel}>
                            {formatDateLabel(day)}
                        </h3>
                        <div className={styles.groupedTransactionsContainer}>
                            {groupedTransactions[day].map((t) => (
                                <HistoryTransaction
                                    key={t.id}
                                    description={t.description}
                                    amount={formatCurrency(t.amount)}
                                    variant={getTransactionVariant(t)}
                                />
                            ))}
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function formatDateLabel(dateStr: string) {
    const date = new Date(dateStr)
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset())

    const today = new Date()
    const isToday = date.toDateString() === today.toDateString()

    if (isToday) return "Hoje"

    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" })
}
