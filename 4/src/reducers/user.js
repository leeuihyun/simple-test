import { handleActions } from "redux-actions";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const ADD_BOOK_USER_SUCCESS = "ADD_BOOK_USER_SUCCESS";

export const DELETE_BOOK_USER_SUCCESS = "DELETE_BOOK_USER_SUCCESS";

export const FIX_BOOK_USER_SUCCESS = "FIX_BOOK_USER_SUCCESS";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

const initialState = {
    allUsers: [
        {
            id: "random_1_1",
            email: "lee",
            password: "123123",
            name: "leeuihyun",
            city: "seoul",
            age: 26,
            items: [],
            buy: [],
        },
    ], //모든 유저 정보 담고 있는 배열
    user: null, //현재 로그인한 유저 정보
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
};

const dummyUser = (data) => ({
    id: data.id,
    items: data.items,
    buy: data.buy,
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
                const us = draft.allUsers.find(
                    (v) =>
                        v.email === action.data.email &&
                        v.password === action.data.password
                );
                if (us) {
                    draft.user = dummyUser(us);
                }

                draft.logInLoading = false;
                draft.logInDone = true;
            }),
        [LOG_IN_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = false;
                draft.logInError = action.error;
            }),
        [ADD_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const findUser = draft.allUsers.find(
                    (v) => v.id === action.data.User.id
                );
                findUser.items.unshift(action.data.Book);
                draft.user.items.unshift(action.data.Book.id);
            }),
        [DELETE_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const findUser = draft.allUsers.find(
                    (v) => v.id === action.data.User.id
                );
                findUser.items = findUser.items.filter(
                    (v) => v.id !== action.data.Book.id
                );
                draft.user.items = draft.user.items.filter(
                    (v) => v !== action.data.Book.id
                );
            }),
        [FIX_BOOK_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {}), //수정해야함
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
    },
    initialState
);

export default user;
