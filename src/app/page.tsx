import * as styles from "./page.css"
import { getDailyHistory } from "@/services/transactions"
import { HistoryTransaction } from "@/components/HistoryTransaction/HistoryTransaction"
import { getTransactionVariant } from "@/utils/helpers"
import { formatCurrency } from "@/utils/format"
import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"

export default async function Home() {
    const groupedTransactions = await getDailyHistory(2026, 2)
    const days = Object.keys(groupedTransactions)

    return (
        <div className={styles.background}>
            <CategoryHomeCard />
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
                                    categoryName={t.category?.name ?? "Geral"}
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
    
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })
}