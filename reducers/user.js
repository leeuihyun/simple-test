import { handleActions } from "redux-actions";
import produce from "immer";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const READ_USER_REQUEST = "READ_USER_REQUEST";
export const READ_USER_SUCCESS = "READ_USER_SUCCESS";
export const READ_USER_FAILURE = "READ_USER_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

const initialState = {
    users: [],
    message: null,
    createUserLoading: false,
    createUserDone: false,
    createUserError: null,
    readUserLoading: false,
    readUserDone: false,
    readUserError: null,
    updateUserLoading: false,
    updateUserSuccess: false,
    updateUserError: null,
    deleteUserLoading: false,
    deleteUserDone: false,
    deleteUserError: null,
};

const user = handleActions(
    {
        [CREATE_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.createUserLoading = true;
                draft.createUserDone = false;
                draft.createUserError = null;
            }),
        [CREATE_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.createUserLoading = false;
                draft.createUserDone = true;
            }),
        [CREATE_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.createUserLoading = false;
                draft.createUserError = action.response.data;
            }),
        [READ_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.readUserLoading = true;
                draft.readUserDone = false;
                draft.readUserError = null;
            }),
        [READ_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.readUserLoading = false;
                draft.readUserDone = true;
            }),
        [READ_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.readUserLoading = false;
                draft.readUserError = action.response.data;
            }),
        [UPDATE_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.updateUserLoading = true;
                draft.updateUserDone = false;
                draft.updateUserError = null;
            }),
        [UPDATE_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.updateUserLoading = false;
                draft.updateUserDone = true;
            }),
        [UPDATE_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.updateUserLoading = false;
                draft.updateUserError = action.response.data;
            }),
        [DELETE_USER_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteUserLoading = true;
                draft.deleteUserDone = false;
                draft.deleteUserError = null;
            }),
        [DELETE_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteUserLoading = false;
                draft.deleteUserDone = true;
            }),
        [DELETE_USER_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteUserLoading = false;
                draft.deleteUserError = action.response.data;
            }),
    },
    initialState
);

export default user;
