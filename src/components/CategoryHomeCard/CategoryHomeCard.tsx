import * as styles from "./styles.css"
import { vars } from "@/styles/theme.css"
import { formatCurrency } from "@/utils/format"

const CategoryHomeCard = () => {
    const currentValue = 2000
    const maxValue = 2500

    // travar em 100 e alterar a cor para vermelho caso passe
    const progressSize = (currentValue * 100) / maxValue

    // usar RECIPE para aplicar estilos diferentes do card

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <p className={styles.cardTopLabel}>Survival</p>
                <p className={styles.valueLabel}>
                    {formatCurrency(currentValue)}
                </p>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarBackground}>
                        <div
                            style={{
                                backgroundColor: vars.colors.survival,
                                width: progressSize + '%',
                            }}
                            className={styles.progressBarFill}
                        ></div>    
                    </div>
                </div>
            </div>
            <div className={styles.availableMoneyContainer}>
                <p className={styles.availableMoneyLabel}>Disponível: </p>
                <p className={styles.availableMoneyValue}>{formatCurrency(maxValue - currentValue)}</p>
            </div>
        </div>
    )
}

export default CategoryHomeCard
