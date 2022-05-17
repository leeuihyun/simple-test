import { handleActions } from "redux-actions";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const ADD_BOOK_USER_REQUEST = "ADD_BOOK_USER_REQUEST";
export const ADD_BOOK_USER_SUCCESS = "ADD_BOOK_USER_SUCCESS";
export const ADD_BOOK_USER_FAILURE = "ADD_BOOK_USER_FAILURE";

export const DELETE_BOOK_USER_REQUEST = "DELETE_BOOK_USER_REQUEST";
export const DELETE_BOOK_USER_SUCCESS = "DELETE_BOOK_USER_SUCCESS";
export const DELETE_BOOK_USER_FAILURE = "DELETE_BOOK_USER_FAILURE";

export const FIX_BOOK_USER_REQUEST = "FIX_BOOK_USER_REQUEST";
export const FIX_BOOK_USER_SUCCESS = "FIX_BOOK_USER_SUCCESS";
export const FIX_BOOK_USER_FAILURE = "FIX_BOOK_USER_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHECK_USER_REQUEST = "CHECK_USER_REQUEST";
export const CHECK_USER_SUCCESS = "CHECK_USER_SUCCESS";
export const CHECK_USER_FAILURE = "CHECK_USER_FAILURE";

const initialState = {
    allUsers: [], //모든 유저 정보 담고 있는 배열
    user: null, //현재 로그인한 유저 정보
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    checkUserLoading: false,
    checkUserDone: false,
    checkUserError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    addBookUserLoading: false,
    addBookUserDone: false,
    addBookUserError: null,
    fixBookUserLoading: false,
    fixBookUserDone: false,
    fixBookUserError: null,
    deleteBookUserLoading: false,
    deleteBookUserDone: false,
    deleteBookUserError: null,
};

const dummyUser = (data) => ({
    id: data.id,
    items: data.items,
});

const dummyAllUser = (data) => ({
    id: uuidv4(),
    email: data.email,
    password: data.password,
    name: data.name,
    city: data.city,
    age: data.age,
    items: [],
    buy: [],
});
const user = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
            }),
        [LOG_IN_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.user = dummyUser(action.data);
                draft.logInLoading = false;
                draft.logInDone = true;
            }),
        [LOG_IN_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = false;
                draft.logInError = action.error;
            }),
        [ADD_BOOK_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addBookUserLoading = true;
                draft.addBookUserDone = false;
                draft.addBookUserError = null;
            }),
        [ADD_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.addBookUserLoading = false;
                draft.addBookUserDone = true;
            }),
        [ADD_BOOK_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.addBookUserLoading = false;
                draft.addBookUserError = action.error;
            }),
        [DELETE_BOOK_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteBookUserLoading = true;
                draft.deleteBookUserDone = false;
                draft.deleteBookUserError = null;
            }),
        [DELETE_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteBookUserLoading = false;
                draft.deleteBookUserDone = true;
            }),
        [DELETE_BOOK_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteBookUserLoading = false;
                draft.deleteBookUserError = action.error;
            }),
        [FIX_BOOK_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookUserLoading = true;
                draft.fixBookUserDone = false;
                draft.fixBookUserError = null;
            }),
        [FIX_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookUserLoading = false;
                draft.fixBookUserDone = true;
            }),
        [FIX_BOOK_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookUserLoading = false;
                draft.fixBookUserError = action.error;
            }),
        [SIGN_UP_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
            }),
        [SIGN_UP_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.allUsers.push(dummyAllUser(action.data));
                draft.signUpLoading = false;
                draft.signUpDone = true;
            }),
        [SIGN_UP_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = false;
                draft.signUpError = action.error;
            }),
        [CHECK_USER_REQUEST]: (state, action) => produce(state, (draft) => {}),
        [CHECK_USER_SUCCESS]: (state, action) => produce(state, (draft) => {}),
        [CHECK_USER_FAILURE]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
);

export default user;
