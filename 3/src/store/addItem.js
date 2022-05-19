import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: "item",
    initialState: [], //name, price, desp
    reducers: {
        addItem: (state, action) => {
            state.push({
                name: action.payload.name,
                desp: action.payload.desp,
                price: action.payload.price,
            });
        },
    },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
