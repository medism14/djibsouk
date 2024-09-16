/** @format */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false, // Dans app.jsx
  categoryOpenGlobal: false, //Dans annonces.jsx
  categoryValueGlobal: [], //Dans annonces.jsx
  categoryChoiceGlobal: [], //Dans annonces.jsx
  imagesAnnonce: [], //Dans annonces.jsx
  inputNamesChange: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setCategoryOpenGlobal: (state, action) => {
      state.categoryOpenGlobal = action.payload;
    },
    setCategoryValueGlobal: (state, action) => {
      state.categoryValueGlobal = action.payload;
    },
    setCategoryChoiceGlobal: (state, action) => {
      state.categoryChoiceGlobal = action.payload;
    },
    setImagesAnnonce: (state, action) => {
      state.imagesAnnonce = action.payload;
    },
    addInputNamesChange: (state, action) => {
      state.inputNamesChange.push(action.payload);
    },
    removeInputNamesChange: (state, action) => {
      state.inputNamesChange = state.inputNamesChange.filter(
        (value) => value !== action.payload
      );
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setCategoryOpenGlobal,
  setCategoryValueGlobal,
  setCategoryChoiceGlobal,
  setImagesAnnonce,
  addInputNamesChange,
  removeInputNamesChange,
} = globalSlice.actions;

export default globalSlice.reducer;
