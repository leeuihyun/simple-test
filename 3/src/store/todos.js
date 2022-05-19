import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        isLoading: false,
        isDone: false,
        error: null,
        data: {},
    },
    reducers: {
        getTodos: (state, action) => {
            state.isLoading = true;
            state.isDone = false;
            state.error = null;
        },
        getTodosSuccess: (state, action) => {
            state.isLoading = false;
            state.isDone = true;
            state.data = action.payload;
            state.error = null;
        },
        getTodosFailure: (state, action) => {
            state.isLoading = false;
            state.isDone = false;
            state.error = action.error;
        },
    },
});

export const { getTodos, getTodosSuccess, getTodosFailure } =
    todosSlice.actions;
export default todosSlice.reducer;
