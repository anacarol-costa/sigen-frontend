import {createSlice} from "@reduxjs/toolkit";


export const SNACKBAR_REDUCER = 'SNACKBAR_REDUCER';

export const snackbarSlice = createSlice({
    name: SNACKBAR_REDUCER,
    initialState: {
        visivel: false,
        mensagem: '',
        textoBotao: 'Ok',
        color: ''
    },
    reducers: {
        mostrarMensagemSucesso: (state, action ) => {
            state.visivel = true;
            state.color = '#388e3c';
            state.mensagem = action.payload;
        },
        mostrarMensagemErro: (state, action ) => {
            state.visivel = true;
            state.color = '#d32f2f';
            state.mensagem = action.payload;
        },
        esconderMensagem: (state) => {
            state.visivel = false;
        }
    }
})

export const { mostrarMensagemSucesso, mostrarMensagemErro, esconderMensagem } = snackbarSlice.actions;

export default snackbarSlice.reducer;
