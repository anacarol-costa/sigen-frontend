import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from "./snackbar-reducer";
import loadingReducer from "./loading-reducer";
import itemOpcaoReducer from "./item-opcao-reducer";
import produtoReducer from "./produto-reducer";

export default configureStore({
    reducer: {
        snackbar: snackbarReducer,
        loading: loadingReducer,
        itemOpcao: itemOpcaoReducer,
        produto: produtoReducer,
    }
})
