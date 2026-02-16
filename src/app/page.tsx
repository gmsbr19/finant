import TransactionForm from "@/features/data/TransactionForm"
import * as styles from "./page.css"
import { Home } from "@/features/home"
import { getCategoriesNamesAndIds } from "@/services/categories"
import { getAccountsNamesAndIds } from "@/services/accounts"

export default async function Page() {
    const categories = await getCategoriesNamesAndIds()
    const accounts = await getAccountsNamesAndIds()

    return (
        <div className={styles.background}>
            <Home />
            <TransactionForm categories={categories} accounts={accounts} />
        </div>
    )
}
