import { takeLatest, fork, all, put, delay } from "redux-saga/effects";
import produce from "immer";
import { handleActions } from "redux-actions";

export const INCREMENT_REQUEST = "INCREMENT_REQUEST";
export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
export const INCREMENT_FAILURE = "INCREMENT_FAILURE";

export const DECEASEMENT_REQUEST = "DECEASEMENT_REQUEST";
export const DECEASEMENT_SUCCESS = "DECEASEMENT_SUCCESS";
export const DECEASEMENT_FAILURE = "DECEASEMENT_FAILURE";

const initialState = {
    value: 0,
    incrementLoading: false,
    incrementDone: false,
    decreasementLoading: false,
    decreasementDone: false,
};

const counter = handleActions(
    {
        [INCREMENT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.incrementLoading = true;
                draft.incrementDone = false;
            }),
        [INCREMENT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.incrementLoading = false;
                draft.incrementDone = true;
                draft.value += 1;
            }),
    },
    initialState
);

export default counter;
