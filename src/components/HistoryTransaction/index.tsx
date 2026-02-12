import * as styles from "./transaction.css"

interface TransactionProps {
    description: string
    categoryName: string
    amount: string
    // A variant aqui mata qualquer switch case no meio do HTML
    variant: "income" | "survival" | "eudaimonia" | "resilience" | "transfer"
}

export function HistoryTransaction({
    description,
    categoryName,
    amount,
    variant,
}: TransactionProps) {
    return (
        <div className={styles.transactionRecipe({ type: variant })}>
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
    )
}
