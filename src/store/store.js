import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from "./snackbar-reducer";
import loadingReducer from "./loading-reducer";
import itemOpcaoReducer from "./item-opcao-reducer";

export default configureStore({
    reducer: {
        snackbar: snackbarReducer,
        loading: loadingReducer,
        itemOpcao: itemOpcaoReducer
    }
})
