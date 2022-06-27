import { createSlice } from "@reduxjs/toolkit";
//import { createAsyncThunk } from "@reduxjs/toolkit";

interface todosType {
    id: number;
    content?: string;
}

interface stateType {
    todos: Array<todosType>;
}

const initialState: stateType = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos = state.todos.concat(action.payload.data);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(
                (v) => v.id !== action.payload.data.id
            );
        },
    },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
