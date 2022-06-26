import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface stateType {
    todos: string[];
}

const initialState: stateType = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.concat(action.payload.data);
        },
    },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
