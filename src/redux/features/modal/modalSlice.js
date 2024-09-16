import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    name: ""
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeValue: (state) => {
            state.value += 1;
        },
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { changeValue, setName } = modalSlice.actions;

export default modalSlice.reducer;

