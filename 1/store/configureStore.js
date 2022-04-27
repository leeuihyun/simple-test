import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas";

const configureStore = () => {
    const sagaware = createSagaMiddleware();
    const middleware = [sagaware];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middleware))
            : composeWithDevTools(applyMiddleware(...middleware));
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});

export default wrapper;
