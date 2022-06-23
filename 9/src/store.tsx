import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./reducers/counterSlice";
const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

export default store;
