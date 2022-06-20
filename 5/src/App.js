import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./slice/counterSlice";
import { useCallback } from "react";
import { getData } from "./slice/thunkSlice";

function App() {
    const dispatch = useDispatch();

    const onClickButton = useCallback(() => {
        dispatch(getData());
    }, []);
    return (
        <div>
            <button onClick={onClickButton}>getData</button>
        </div>
    );
    /*const { value } = useSelector((state) => state.counter);
    const onChangePlus = useCallback(() => {
        dispatch(counterActions.plus({ data: 2 }));
    }, []);
    const onChangeMinus = useCallback(() => {
        dispatch(counterActions.minus({ data: 2 }));
    }, []);
    return (
        <div>
            <button onClick={onChangePlus}>+</button>
            <button onClick={onChangeMinus}>-</button>
            <div>{value}</div>
        </div>
    );*/
}

export default App;
