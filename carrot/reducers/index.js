import React from "react";
import { combineReducers } from "redux";
import product from "./product";

const rootReducer = combineReducers({
    product,
});

export default rootReducer;
