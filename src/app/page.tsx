import * as styles from "./page.css"
import { Home } from "@/features/home"

export default async function Page() {
    return (
        <div className={styles.background}>
            <Home />
        </div>
    )
}
