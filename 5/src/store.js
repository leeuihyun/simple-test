import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";
import thunkSlice from "./slice/thunkSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        thunk: thunkSlice,
    },
});

export default store;
