import TransactionForm from "@/features/data/TransactionForm"
import * as styles from "./page.css"
import { Home } from "@/features/home"
import { getCategoriesNamesAndIds } from "@/services/categories"

export default async function Page() {
    const categories = await getCategoriesNamesAndIds()

    return (
        <div className={styles.background}>
            <Home />
            <TransactionForm categories={categories} />
        </div>
    )
}
