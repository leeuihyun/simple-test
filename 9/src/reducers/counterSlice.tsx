import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        plus(state, action) {
            state.value = state.value + parseInt(action.payload);
            console.log(action.payload);
        },
        minus(state, action) {
            state.value = state.value - parseInt(action.payload);
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
