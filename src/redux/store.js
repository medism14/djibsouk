import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice';
import globalReducer from './features/global/globalSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        global: globalReducer,
    },
})