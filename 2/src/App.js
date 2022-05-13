import "./App.css";
import Main from "./pages/Main";
import Add from "./pages/Add";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <Route exact path="/" component={Main} />
            <Route path="/add" component={Add} />
        </>
    );
}

export default App;
