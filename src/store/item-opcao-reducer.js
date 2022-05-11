import {createSlice} from "@reduxjs/toolkit";

export const ITEM_OPCAO_REDUCER = 'ITEM_OPCAO_REDUCER';

export const itemOpcaoSlice = createSlice({
    name: ITEM_OPCAO_REDUCER,
    initialState: {
        itemOpcaoModel: [],
        descricao: null,
    },
    reducers: {
        atualizarItemOpcaoModel: (state, action) => {
            const {indice, ...novoPayload} = action.payload;
            const estadoAnterior = state.itemOpcaoModel[indice];

            state.itemOpcaoModel[indice] = {
                itemDescricao: state.descricao,
                ...estadoAnterior,
                ...novoPayload,
            };
        },
        atualizarDescricaoItemOpcao: (state, action) => {
            state.descricao = action.payload
        }
    }
});

export const { atualizarItemOpcaoModel, atualizarDescricaoItemOpcao } = itemOpcaoSlice.actions;

export default itemOpcaoSlice.reducer;
