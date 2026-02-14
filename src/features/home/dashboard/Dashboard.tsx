import HomeCardContainer from "@/components/HomeCardContainer/HomeCardContainer"
import * as styles from "./Dashboard.css"
import * as typo from "@/styles/typography.css"
import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"
import { CategoryHomeCardProps } from "@/components/CategoryHomeCard/CategoryHomeCard"
import { vars } from "@/styles/theme.css"
import { getTransferTypeTotals } from "@/services/categories"

type DashboardProps = {
    year: number,
    month: number
}

const Dashboard = async ({ year, month }: DashboardProps) => {
    const incomeTotal = await getTransferTypeTotals(year, month, "INCOME")
    const expenseTotal = await getTransferTypeTotals(year, month, "EXPENSE")

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
            currentValue: incomeTotal.settled,
            maxValue: incomeTotal.expected,
            color: vars.colors.income,
            footerLabel: "Previsto: ",
            footerValue: incomeTotal.expected,
            status: "normal",
        },
        {
            title: "Expenses",
            currentValue: expenseTotal.settled,
            maxValue: expenseTotal.expected,
            color: vars.colors.danger,
            footerLabel: "Previsto: ",
            footerValue: expenseTotal.expected,
            status: "normal",
        },
    ]
    return (
        <section className={styles.dashboardContainer}>
            <h1 className={typo.h1}>Dashboard</h1>
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
        </section>
    )
}

export default Dashboard
