import { handleActions } from "redux-actions";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const DELETE_BOOK_REQUEST = "DELETE_BOOK_REQUEST";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";

export const FIX_BOOK_REQUEST = "FIX_BOOK_REQUEST";
export const FIX_BOOK_SUCCESS = "FIX_BOOK_SUCCESS";
export const FIX_BOOK_FAILURE = "FIX_BOOK_FAILURE";

const initialState = {
    booksList: [],
    addBookLoading: false,
    addBookDone: false,
    addBookError: null,
    deleteBookLoading: false,
    deleteBookDone: false,
    deleteBookError: null,
    fixBookLoading: false,
    fixBookDone: false,
    fixBookError: null,
};

const dummyBook = (data) => ({
    Book: {
        id: data.Book.id, //dispatch할때 id 넣어주기
        name: data.Book.name,
        page: data.Book.page,
        author: data.Book.author,
        state: data.Book.state,
    },
    User: {
        id: data.User.id,
    },
});
const books = handleActions(
    {
        [ADD_BOOK_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addBookLoading = true;
                draft.addBookDone = false;
                draft.addBookError = null;
            }),
        [ADD_BOOK_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.booksList.unshift(dummyBook(action.data));
                //만약 책을 추가하면 사용자가 등록한 items에도 추가를 해줘야하기 때문에 saga에서 추가를 해주면 될듯 함.
                draft.addBookLoading = false;
                draft.addBookDone = true;
            }),
        [ADD_BOOK_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.addBookLoading = false;
                draft.addBookError = action.error;
            }),
        [DELETE_BOOK_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteBookLoading = true;
                draft.deleteBookDone = false;
                draft.deleteBookError = null;
            }),
        [DELETE_BOOK_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.booksList.filter((book) => book.Book.id !== action.id);
                draft.deleteBookLoading = false;
                draft.deleteBookDone = true;
            }),
        [DELETE_BOOK_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.deleteBookLoading = false;
                draft.deleteBookError = action.error;
            }),
        [FIX_BOOK_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookLoading = true;
                draft.fixBookDone = false;
                draft.fixBookError = null;
            }),
        [FIX_BOOK_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookLoading = false;
                draft.fixBookDone = true;
            }),
        [FIX_BOOK_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.fixBookLoading = false;
                draft.fixBookError = action.error;
            }),
    },
    initialState
);

export default books;
