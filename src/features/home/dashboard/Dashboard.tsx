import HomeCardContainer from "@/components/HomeCardContainer/HomeCardContainer"
import * as styles from "./Dashboard.css"
import * as typo from "@/styles/typography.css"
import CategoryHomeCard from "@/components/CategoryHomeCard/CategoryHomeCard"
import { CategoryHomeCardProps } from "@/components/CategoryHomeCard/CategoryHomeCard"
import { vars } from "@/styles/theme.css"
import { getCategories, getTransferTypeTotals } from "@/services/categories"

type DashboardProps = {
    year: number,
    month: number
}

const Dashboard = async ({ year, month }: DashboardProps) => {
    const incomeTotal = await getTransferTypeTotals(year, month, "INCOME")
    const expenseTotal = await getTransferTypeTotals(year, month, "EXPENSE")

    const categoriesData = await getCategories(year, month)

    const orderedCategories = [
        { key: "Survival", color: vars.colors.survival, type: "budget" },
        { key: "Eudaimonia", color: vars.colors.eudaimonia, type: "budget" },
        { key: "Resilience", color: vars.colors.resilience, type: "target" },
    ]

    const categoryCards: CategoryHomeCardProps[] = orderedCategories.map((config) => {
        const data = categoriesData[config.key] || { 
            spent: 0, 
            budget: 0, 
            available: 0, 
            color: '#ccc',
            status: 'normal' 
        }

        const isBudget = config.type === "budget"
        const isExceeded = data.spent > data.budget

        let status: "normal" | "danger" | "success" = "normal"
        if (isBudget) {
            status = isExceeded ? "danger" : "normal"
        } else {
            status = "success"
        }

        return {
            title: config.key,
            currentValue: data.spent,
            maxValue: data.budget,
            color: config.color,
            footerLabel: "Disponível: ",
            footerValue: isBudget ? Math.abs(data.available) : data.spent,
            status: status,
        }
    })

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
