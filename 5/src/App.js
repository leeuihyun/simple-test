import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./slice/counterSlice";
import { useCallback } from "react";
import { getData } from "./slice/thunkSlice";
import { getMethod } from "./slice/thunkSlice";

import axios from "axios";

function App() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState("");

    //const [arr2, setArr2] = useState(null);
    const onClickButton = useCallback(() => {
        dispatch(getData());
    }, []);
    const onChangeNumber = useCallback((e) => {
        setNumber(e.target.value);
    }, []);
    const onClickNumber = useCallback(() => {
        console.log(number);
        dispatch(getMethod(number));
    }, [number]);
    /*const onClickButton2 = useCallback(() => {
        const test = async () => {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                setArr2(res);
            } catch (error) {
                console.error(error);
            }
        };
        test();
        console.log(arr2);
    }, []);*/
    return (
        <div>
            <button onClick={onClickButton}>getData</button>
            <input type="text" value={number} onChange={onChangeNumber} />
            <button onClick={onClickNumber}>click</button>
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
