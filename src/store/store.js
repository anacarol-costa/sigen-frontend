import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from "./snackbar-reducer";
import loadingReducer from "./loading-reducer";

export default configureStore({
    reducer: {
        snackbar: snackbarReducer,
        loading: loadingReducer,
    }
})
