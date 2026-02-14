import * as styles from "./CategoryHomeCard.css"
import { vars } from "@/styles/theme.css"
import { formatCurrency } from "@/utils/format"

type variants = "survival" | "eudaimonia" | "resilience"

type VariantColorMap = Record<variants, string>

export type CategoryHomeCardProps = {
    currentValue: number
    maxValue: number
    variant: variants
}

const variantColorMap: VariantColorMap = {
    survival: vars.colors.survival,
    eudaimonia: vars.colors.eudaimonia,
    resilience: vars.colors.resilience,
}

const CategoryHomeCard = ({
    currentValue,
    maxValue,
    variant,
}: CategoryHomeCardProps) => {
    const rawPercentage = (currentValue * 100) / maxValue

    const progressSize = Math.min(100, rawPercentage)

    const isOutOfBudget = rawPercentage > 100

    const barColor = isOutOfBudget
        ? vars.colors.danger
        : variantColorMap[variant]

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <p
                    className={styles.cardTopLabel}
                    style={{ color: variantColorMap[variant] }}
                >
                    {variant.charAt(0).toUpperCase() +
                        variant.slice(1).toLowerCase()}
                </p>
                <p className={styles.valueLabel}>
                    {formatCurrency(currentValue)}
                </p>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarBackground}>
                        <div
                            style={{
                                backgroundColor: variantColorMap[variant],
                                width: progressSize + "%",
                            }}
                            className={styles.progressBarFill}
                        ></div>
                    </div>
                </div>
            </div>
            <div className={styles.availableMoneyContainer}>
                <p className={styles.availableMoneyLabel}>
                    {variant == "resilience" ? "Meta: " : "Disponível: "}{" "}
                </p>
                {variant == "resilience" ? (
                    <p
                        className={styles.availableMoneyValue}
                        style={{
                            color: isOutOfBudget
                                ? vars.colors.income
                                : vars.colors.textPrimary,
                        }}
                    >
                        {formatCurrency(maxValue)}
                    </p>
                ) : (
                    <p className={styles.availableMoneyValue}
                    style={{
                            color: isOutOfBudget
                                ? vars.colors.danger
                                : vars.colors.textPrimary,
                        }}
                    >
                        {formatCurrency(maxValue - currentValue)}
                    </p>
                )}
            </div>
        </div>
    )
}

export default CategoryHomeCard
