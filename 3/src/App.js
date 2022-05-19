import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
function App() {
    //const count2 = useSelector((state) => state.counter.value); 이런식으로도 접근이 가능하다 원래 사용했던 것처럼.
    return (
        <>
            <Route exact path="/" component={MainPage} />
            <Route path="/list" component={ListPage}></Route>
        </>
    );
}

export default App;
