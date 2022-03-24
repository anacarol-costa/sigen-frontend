import {createSlice} from "@reduxjs/toolkit";


export const LOADING_REDUCER = 'LOADING_REDUCER';

export const loadingSlice = createSlice({
    name: LOADING_REDUCER,
    initialState: {
        requicoesPendentes: 0,
    },
    reducers: {
        adicionarRequest: (state) => {
            state.requicoesPendentes++;
        },
        finalizarRequest: (state) => {
            state.requicoesPendentes--;
        },
    }
})

export const { adicionarRequest, finalizarRequest } = loadingSlice.actions;

export default loadingSlice.reducer;
