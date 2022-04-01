import store from "../../store/store";
import {LOADING_REDUCER} from "../../store/loading-reducer";

export default {

    getBaseUrl() {
        return process.env.REACT_APP_URL_BACKEND_LOCAL || process.env.REACT_APP_URL_BACKEND;
    },

    executarRequest(request) {
        store.dispatch({ type: `${LOADING_REDUCER}/adicionarRequest` });
        return request;
    },

    falhar(error) {
        store.dispatch({ type: `${LOADING_REDUCER}/finalizarRequest` });
        return Promise.reject(error)
    },


    finalizar(response) {
        store.dispatch({ type: `${LOADING_REDUCER}/finalizarRequest` });
        return response;
    }


}
