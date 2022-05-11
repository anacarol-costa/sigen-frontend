import {createSlice} from "@reduxjs/toolkit";

export const ITEM_OPCAO_REDUCER = 'ITEM_OPCAO_REDUCER';

export const itemOpcaoSlice = createSlice({
    name: ITEM_OPCAO_REDUCER,
    initialState: {
        itensOpcoesModel: [],
        itemDescricao: null,
    },
    reducers: {
        atualizarItemOpcaoModel: (state, action) => {
            const {indice, ...novoPayload} = action.payload;
            const estadoAnterior = state.itensOpcoesModel[indice];

            state.itensOpcoesModel[indice] = {
                ...estadoAnterior,
                ...novoPayload,
            };
        },
        atualizarDescricaoItemOpcao: (state, action) => {
            state.itemDescricao = action.payload
        },
        removerItemProduto: (state, action) => {
            state.itensOpcoesModel = state.itensOpcoesModel.filter((item, index) => action.payload !== index)
        }
    }
});

export const { atualizarItemOpcaoModel, atualizarDescricaoItemOpcao, removerItemProduto } = itemOpcaoSlice.actions;

export default itemOpcaoSlice.reducer;
