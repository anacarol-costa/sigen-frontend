import { configureStore } from '@reduxjs/toolkit'
import snackbarReducer from "./snackbar/snackbar-reducer";

export default configureStore({
    reducer: {
        snackbar: snackbarReducer,
    }
})
