import { configureStore } from "@reduxjs/toolkit";
import { filesSlice } from "./files/filesSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        files: filesSlice.reducer,
        ui: uiSlice.reducer
    }
}); 