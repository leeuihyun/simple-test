import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        getUsers(state) {
            state.loading = false;
        },
    },
});
