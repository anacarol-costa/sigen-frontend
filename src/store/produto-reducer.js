import {createSlice} from "@reduxjs/toolkit";


export const PRODUTO_REDUCER = 'PRODUTO_REDUCER';

export const produtoSlice = createSlice({
    name: PRODUTO_REDUCER,
    initialState: {
        itensOpcao: [],
    },
    reducers: {
        atualizarItensOpcao: (state, action) => {
            state.itensOpcao.push(action.payload);
        },
    }
})

export const { atualizarItensOpcao } = produtoSlice.actions;

export default produtoSlice.reducer;
