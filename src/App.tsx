import { StoreProvider } from "./app/StoreProvider";
import ApplicationRouter from "./app/routes/ApplicationRouter";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

function App() {
    return (
        <StoreProvider>
            <ApplicationRouter history={browserHistory} />
        </StoreProvider>
    );
}

export default App;
