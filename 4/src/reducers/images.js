import { handleActions } from "redux-actions";
import { produce } from "immer";

export const ADD_DATA_REQUEST = "ADD_DATA_REQUEST";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";
export const ADD_DATA_FAILURE = "ADD_DATA_FAILURE";

export const DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAILURE = "DELETE_DATA_FAILURE";

const initialState = {
    dataList: [],
    addDataLoading: false,
    addDataDone: false,
    addDataError: null,
    deleteDataLoading: false,
    deleteDataDone: false,
    deleteDataError: null,
};

const dummyData = (data) => ({
    Data: {
        id: data.Data.id, //dispatch할때 id 넣어주기
        name: data.Data.name,
        tag: data.Data.tag,
        author: data.Data.author,
        explanation: data.Data.explanation,
        file: data.Data.file,
    },
    User: {
        id: data.User.id,
    },
});
const images = handleActions(
    {
        [ADD_DATA_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addDataLoading = true;
                draft.addDataDone = false;
                draft.addDataError = null;
            }),
        [ADD_DATA_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.dataList.unshift(dummyData(action.data));
                //만약 책을 추가하면 사용자가 등록한 items에도 추가를 해줘야하기 때문에 saga에서 추가를 해주면 될듯 함.
                draft.addDataLoading = false;
                draft.addDataDone = true;
            }),
        [ADD_DATA_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.addDataLoading = false;
                draft.addDataError = action.error;
            }),
        [DELETE_DATA_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteDataLoading = true;
                draft.deleteDataDone = false;
                draft.deleteDataError = null;
            }),
        [DELETE_DATA_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.dataList.filter((v) => v.Data.id !== action.data.id);
                draft.deleteDataLoading = false;
                draft.deleteDataDone = true;
            }),
        [DELETE_DATA_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteDataLoading = false;
                draft.deleteDataError = action.error;
            }),
    },
    initialState
);

export default images;
