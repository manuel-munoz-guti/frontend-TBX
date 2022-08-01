import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isTyping: false,
        isLoading: true
    },
    reducers: {
        setTyping: (state) => {
            state.isTyping = true;
        },
        setNotTyping: (state) => {
            state.isTyping = false;
        },
        setLoading: (state) => {
            state.isLoading = true;
        },
        setNotLoading: (state) => {
            state.isLoading = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setTyping, setNotTyping, setLoading, setNotLoading } = uiSlice.actions;