import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"
import * as styles from "./HomeCardContainer.css"
import { CategoryHomeCardProps } from "@/components/CategoryHomeCard/CategoryHomeCard"

const HomeCardContainer = () => {
    const cardsInfo: CategoryHomeCardProps[] = [
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

    return (
        <div className={styles.homeCardContainer}>
            {cardsInfo.map((c) => (
                <CategoryHomeCard
                    currentValue={c.currentValue}
                    maxValue={c.maxValue}
                    variant={c.variant}
                />
            ))}
        </div>
    )
}

export default HomeCardContainer
