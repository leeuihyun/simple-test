# redux-toolkit

-   createSlice를 이용한 reducer 및 action 처리
-   RTK를 이용할 때는 @reduxjs/toolkit 과 react-redux 두개만 설치하면 된다. 심지어 redux를 설치할 필요도 없음
-   > store 설정 방법 (훨씬 간편해짐)

### store.js (reducer 추가한다면 계속 추가해줘야 한다 like combineReducers)

```javascript
[store.js];
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

export default store;
```

### createSlice

```javascript
[reducers / counterSlice.js];
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}
const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        plusAction(state,action){
            state.value = state.value+action.payload.data;
        }
        minusAction(state,action){
            state.value = state.value - action.payload.data;
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
```

위와 같이 createSlice를 이용해서 액션 리듀서와 initialState를 생성해서 전역 상태를 만들고 store.js에서 가져와서 사용한다.

그렇다면 dispatch를 하는 방식도 달라졌는지 살펴보자

dispatch는 크게 달라진 것은 없다. react-redux에서 useDispatch와 useSelector을 적재적소에 이용하면 동일하게, 이전보다 더 짧아진 코드로 편리하게 이용할 수 있다.

### dispatch

```javascript
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../reducers/counterSlice.js";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);
    const plus = (e) => {
        dispatch(counterActions.plusAction({ data: 2 }));
    };
    const minus = (e) => {
        dispatch(counterActions.minusAction({ data: 2 }));
    };
    return (
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <div>{value}</div>
        </div>
    );
};
```

### createAsyncThunk 를 통한 비동기 처리

```javascript
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    arr: [],
    status: "",
    error: null,
};

export const getData = createAsyncThunk("getData", async () => {
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("sdafdsfds");
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        return error;
    }
});

const thunkSlice = createSlice({
    name: "thunk",
    initialState,
    reducers: {},
    extraReducers: {
        [getData.pending]: (state) => {
            state.status = "loading";
        },
        [getData.fulfilled]: (state, action) => {
            state.status = "success";
            state.arr.push(action.payload);
        },
        [getData.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        },
    },
});

export const thunkActions = thunkSlice.actions;
export default thunkSlice.reducer;
```
