import { combineReducers } from "redux";
import user from "./user";
import images from "./images";

const rootReducer = combineReducers({
    user,
    images,
});

export default rootReducer;
