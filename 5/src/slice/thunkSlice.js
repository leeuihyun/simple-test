import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    arr: [],
    status: "",
    error: null,
};

export const getData = createAsyncThunk("getData", async () => {
    try {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("sdafdsfds");
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        return error;
    }
});

const thunkSlice = createSlice({
    name: "thunk",
    initialState,
    reducers: {},
    extraReducers: {
        [getData.pending]: (state) => {
            state.status = "loading";
        },
        [getData.fulfilled]: (state, action) => {
            state.status = "success";
            state.arr.push(action.payload);
        },
        [getData.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        },
    },
});

export const thunkActions = thunkSlice.actions;
export default thunkSlice.reducer;
