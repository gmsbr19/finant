import Dashboard from "./dashboard/Dashboard";
import History from "./history/History";
import * as styles from './Home.css';

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Dashboard />
            <History />
        </div>
    );
}
