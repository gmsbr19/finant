import HomeCardContainer from "@/components/HomeCardContainer/HomeCardContainer"
import * as styles from "./Dashboard.css"
import * as typo from "@/styles/typography.css"
import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"
import { CategoryHomeCardProps } from "@/components/CategoryHomeCard/CategoryHomeCard"
import { vars } from "@/styles/theme.css"
import { formatCurrency } from "@/utils/format"

const Dashboard = () => {
    const categoryCards: CategoryHomeCardProps[] = [
        {
            title: "Survival",
            currentValue: 2000,
            maxValue: 2500,
            color: vars.colors.survival,
            footerLabel: "Disponível: ",
            footerValue: 2500 - 2000,
            status: "normal",
        },
        {
            title: "Eudaimonia",
            currentValue: 320,
            maxValue: 500,
            color: vars.colors.eudaimonia,
            footerLabel: "Disponível: ",
            footerValue: 500 - 320,
            status: "normal",
        },
        {
            title: "Resilience",
            currentValue: 432,
            maxValue: 500,
            color: vars.colors.resilience,
            footerLabel: "Meta: ",
            footerValue: 500,
            status: "normal",
        },
    ]

    const moneyCards: CategoryHomeCardProps[] = [
        {
            title: "Income",
            currentValue: 3000,
            maxValue: 3500,
            color: vars.colors.income,
            footerLabel: "Previsto: ",
            footerValue: 3500 - 3000,
            status: "normal",
        },
        {
            title: "Expenses",
            currentValue: 2000,
            maxValue: 2500,
            color: vars.colors.danger,
            footerLabel: "Previsto: ",
            footerValue: 2500 - 2000,
            status: "normal",
        },
    ]
    return (
        <div className={styles.dashboardContainer}>
            <h1 className={typo.display}>Dashboard</h1>
            <HomeCardContainer colNums={2}>
                {moneyCards.map((c) => (
                    <CategoryHomeCard key={c.title} {...c} />
                ))}
            </HomeCardContainer>
            <HomeCardContainer colNums={3}>
                {categoryCards.map((c) => (
                    <CategoryHomeCard key={c.title} {...c} />
                ))}
            </HomeCardContainer>
        </div>
    )
}

export default Dashboard
