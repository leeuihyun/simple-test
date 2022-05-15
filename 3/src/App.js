import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount,
} from "../src/store/counter";
import { Route, Link } from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    const onClickIncrement = useCallback(() => {
        dispatch(increment());
    }, []);
    const onClickDecrement = useCallback(() => {
        dispatch(decrement());
    }, []);
    const onClickIncrementAmount = useCallback(() => {
        dispatch(incrementByAmount(5));
    }, []);
    return (
        <>
            <Route path="/main" component={MainPage} />

            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={onClickDecrement}>decrement</button>
                <button onClick={onClickIncrementAmount}>
                    incrementByAmount
                </button>
                <Link to="/main">링크</Link>
            </div>
        </>
    );
}

export default App;
