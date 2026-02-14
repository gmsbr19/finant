import Dashboard from "./dashboard/Dashboard";
import History from "./history/History";

export const Home = () => {
    return (
        <div>
            <section>
                <Dashboard></Dashboard>
            </section>
            <section>
                <History></History>
            </section>
        </div>
    );
}
