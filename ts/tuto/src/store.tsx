import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducers/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
});

export default store;
