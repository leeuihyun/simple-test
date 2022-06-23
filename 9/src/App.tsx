import React, { useCallback, useState } from "react";
import Button from "./components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./reducers/counterSlice";

function App() {
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const { value } = useSelector((state: any) => state.counter);
    const onClickPlus = useCallback(() => {
        dispatch(counterActions.plus(number));
    }, [number]);
    const onClickMinus = useCallback(() => {
        dispatch(counterActions.minus(number));
    }, [number]);
    const onChangeNumber = useCallback((e: any) => {
        setNumber(e.target.value);
    }, []);
    return (
        <div>
            <h1>{value}</h1>
            <br />
            <input type="text" value={number} onChange={onChangeNumber} />
            <Button width={100} onClick={onClickPlus}>
                +
            </Button>
            <Button width={100} onClick={onClickMinus}>
                -
            </Button>
        </div>
    );
}

export default App;
