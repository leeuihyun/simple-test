import { handleActions } from "redux-actions";
import produce from "immer";

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const CHANGE_PRODUCT_REQUEST = "CHANGE_PRODUCT_REQUEST";
export const CHANGE_PRODUCT_SUCCESS = "CHANGE_PRODUCT_SUCCESS";
export const CHANGE_PRODUCT_FAILURE = "CHANGE_PRODUCT_FAILURE";

const initialState = {
    product: [],
    getProductLoading: false,
    getProductDone: false,
    getProductError: null,
    addProductLoading: false,
    addProductDone: false,
    addProductError: null,
    changeProductLoading: false,
    changeProductDone: false,
    changeProductError: null,
};

const product = handleActions(
    {
        [GET_PRODUCT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.getProductLoading = true;
                draft.getProductDone = false;
                draft.getProductError = null;
            }),
        [GET_PRODUCT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.product = action.data;
                draft.getProductLoading = false;
                draft.getProductDone = true;
                console.log(draft.product);
            }),
        [GET_PRODUCT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.getProductLoading = false;
                draft.getProductError = action.data.error;
            }),
        [ADD_PRODUCT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addProductLoading = true;
                draft.addProductDone = false;
                draft.addProductError = null;
            }),
        [ADD_PRODUCT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.product = action.data;
                draft.addProductLoading = false;
                draft.addProductDone = true;
                console.log(draft.product);
            }),
        [ADD_PRODUCT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.addProductLoading = false;
                draft.addProductError = action.data.error;
            }),
        [CHANGE_PRODUCT_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.changeProductLoading = true;
                draft.changeProductDone = false;
                draft.changeProductError = null;
            }),
        [CHANGE_PRODUCT_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const ex = draft.product.find((v) => v.id === action.data.id);
                ex = {
                    ...ex,
                    name: action.data.name,
                    content: action.data.content,
                    price: action.data.price,
                };
                draft.changeProductLoading = false;
                draft.changeProductDone = true;
                console.log(draft.product);
            }),
        [CHANGE_PRODUCT_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.changeProductLoading = false;
                draft.changeProductError = action.data.error;
            }),
    },
    initialState
);

export default product;
