import { ArrowDownToLine, ArrowLeftRight, Flower, HandFist, Heart, LucideIcon } from "lucide-react"
import * as styles from "./HistoryTransaction.css"

type VariantType = "income" | "survival" | "eudaimonia" | "resilience" | "transfer"

interface TransactionProps {
    description: string
    amount: string
    variant: VariantType
}

export const variantIconMap: Record<VariantType, LucideIcon> = {
    income: ArrowDownToLine,
    survival: Heart,
    eudaimonia: Flower,
    resilience: HandFist,
    transfer: ArrowLeftRight
}

export function HistoryTransaction({
    description,
    amount,
    variant,
}: TransactionProps) {
    const Icon = variantIconMap[variant]
    return (
        <div className={styles.baseRow}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.typeLabel}>
                    {variant === "income" ? "Entrada" : "Saída"}
                </p>
                <div className={styles.nameAndValue}>
                    <p className={styles.nameText}>{description}</p>
                    <span
                        className={styles.amountText({
                            colorType: variant === "income" ? "income" : "expense",
                        })}
                    >
                        {amount}
                    </span>
                </div>
            </div>
        </div>
    )
}
