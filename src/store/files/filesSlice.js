import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        loading: true,  //true or false
        data: [],
        active: null
    },
    reducers: {
        setActiveData: (state, action) => {
            state.active = action.payload;
        },
        setData: (state, action) => {
            if(action.payload){
                state.data = action.payload ;
            } else {
                state.data = [];
            } 
            state.loading = false;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setActiveData,  setData } = filesSlice.actions;