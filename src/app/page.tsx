import TransactionForm from "@/features/data/TransactionForm"
import * as styles from "./page.css"
import { Home } from "@/features/home"
import { getNamesAndIds } from "@/services/categories"

export default async function Page() {
    const categories = await getNamesAndIds()

    return (
        <div className={styles.background}>
            <Home />
            <TransactionForm categories={categories} />
        </div>
    )
}
