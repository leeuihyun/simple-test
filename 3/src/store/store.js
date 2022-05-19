import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterSlice } from "./counter";
import rootSaga from "../sagas";
import { todosSlice } from "./todos";
const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createStore;
