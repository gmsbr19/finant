import { getDailyHistory } from "@/services/transactions";
import * as styles from "./History.css"
import { HistoryTransaction } from "@/components/HistoryTransaction/HistoryTransaction";
import { formatCurrency, formatDateLabel } from "@/utils/format";
import { getTransactionVariant } from "@/utils/helpers";
import { h1 } from "@/styles/typography.css";
import { AnimateList } from "./historyAnimate";

const History = async () => {
    const groupedTransactions = await getDailyHistory(2026, 2)
    const days = Object.keys(groupedTransactions)
    return (
        <section className={styles.historyContainer}>
            <h1 className={h1}>Histórico</h1>
            <AnimateList className={styles.timeline}>
                {days.map((day) => (
                    <div key={day} className={styles.transactionsContainer}>
                        <h3 className={styles.dateLabel}>
                            {formatDateLabel(day)}
                        </h3>
                        <AnimateList className={styles.groupedTransactionsContainer}>
                            {groupedTransactions[day].map((t) => (
                                <HistoryTransaction
                                    key={t.id}
                                    description={t.description}
                                    amount={formatCurrency(t.amount)}
                                    variant={getTransactionVariant(t)}
                                />
                            ))}
                        </AnimateList>
                        <div className={styles.divider}></div>
                    </div>
                ))}
            </AnimateList>
        </section>
    );
}
 
export default History;