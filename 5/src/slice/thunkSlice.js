import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    arr: [],
    arr2: [],
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

export const getMethod = createAsyncThunk(
    "getMethod",
    async (todosId, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/todos/${todosId}`
            );
            console.log("getMethod start!");
            console.log(todosId);
            console.log(res);

            //console.log(res);
            return res.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
);
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
        [getMethod.pending]: (state, action) => {
            state.status = "loading";
        },
        [getMethod.fulfilled]: (state, action) => {
            state.status = "success";
            state.arr2.push(action.payload);
        },
        [getMethod.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error;
        },
    },
});

export const thunkActions = thunkSlice.actions;
export default thunkSlice.reducer;
