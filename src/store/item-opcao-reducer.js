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
        },
        removerItemProduto: (state, action) => {
            state.itemOpcaoModel = state.itemOpcaoModel.filter((item, index) => action.payload !== index)
        }
    }
});

export const { atualizarItemOpcaoModel, atualizarDescricaoItemOpcao, removerItemProduto } = itemOpcaoSlice.actions;

export default itemOpcaoSlice.reducer;
