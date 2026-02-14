import { formatCurrency } from "@/utils/format"
import * as styles from "./CategoryHomeCard.css"
import { vars } from "@/styles/theme.css"

export type CategoryHomeCardProps = {
    title: string
    currentValue: number
    maxValue: number
    color: string
    footerLabel: string // "Disponível", "Meta", etc.
    footerValue: number // O resultado já calculado
    status: "normal" | "danger" | "success" // O sinalizador
}

const CategoryHomeCard = ({
    title,
    currentValue,
    maxValue,
    color,
    footerLabel,
    footerValue,
    status,
}: CategoryHomeCardProps) => {
    const rawPercentage = (currentValue * 100) / maxValue

    const progressSize = Math.min(100, rawPercentage)

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <p className={styles.cardTopLabel} style={{ color: color }}>
                    {title}
                </p>
                <p className={styles.valueLabel}>
                    {formatCurrency(currentValue)}
                </p>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarBackground}>
                        <div
                            style={{
                                backgroundColor: color,
                                width: progressSize + "%",
                            }}
                            className={styles.progressBarFill}
                        ></div>
                    </div>
                </div>
            </div>
            <div className={styles.availableMoneyContainer}>
                <p className={styles.availableMoneyLabel}>{footerLabel}</p>
                <p
                    className={styles.availableMoneyValue}
                    style={{
                        color:
                            status == "danger"
                                ? vars.colors.danger
                                : vars.colors.textPrimary,
                    }}
                >
                    {formatCurrency(footerValue)}
                </p>
            </div>
        </div>
    )
}

export default CategoryHomeCard
