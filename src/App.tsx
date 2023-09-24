import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./app/StoreProvider";
import ApplicationRouter from "./app/routes/ApplicationRouter";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.css";

const browserHistory = createBrowserHistory();

function App() {
    return (
        <StoreProvider>
            <ToastContainer />
            <ApplicationRouter history={browserHistory} />
        </StoreProvider>
    );
}

export default App;
