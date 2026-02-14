import Dashboard from "./dashboard/Dashboard";
import History from "./history/History";
import * as styles from './Home.css';

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Dashboard year={2026} month={2} />
            <History />
        </div>
    );
}
