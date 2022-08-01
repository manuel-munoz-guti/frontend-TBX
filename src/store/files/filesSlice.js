import { createSlice } from '@reduxjs/toolkit';

export const filesSlice = createSlice({
    name: 'files',
    initialState: {
        response: {
            ok: false,
            status: 0,
            code: '',
            message: ''
        },
        data: [],
        active: null
    },
    reducers: {
        setData: (state, action) => {
            if(action.payload){
                state.data = action.payload ;
            } else {
                state.data = [];
            }
        },
        setActiveData: (state, action) => {
            state.active = action.payload;
        },
        setResponse: (state, action) => {
            state.response = action.payload;
        },
        setClearResponse: (state) => {
            state.response = {
                ok: false,
                status: 0,
                code: '',
                message: ''
            }
        }
    }
});

// Action creators are generated for each case reducer function
export const { setData, setActiveData, setResponse, setClearResponse } = filesSlice.actions;