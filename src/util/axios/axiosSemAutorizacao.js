import axios from 'axios';
import store from "../../store/store";
import {LOADING_REDUCER} from "../../store/loading-reducer";


const axiosSemAturozicao = axios.create({
    baseURL: getBaseUrl(),
    timeout: 15 * 1000,
});

function getBaseUrl() {
    const url = process.env.REACT_APP_URL_BACKEND_LOCAL || process.env.REACT_APP_URL_BACKEND;
    console.log('URL BACK', url);
    return url;
}

axiosSemAturozicao.interceptors.request.use(
    (request) => executarRequest(request),
    (error) => falha(error)
);

axiosSemAturozicao.interceptors.response.use(
    (request) => finalizar(request),
    (error) => falha(error)

)

function executarRequest(request) {
    store.dispatch({ type: `${LOADING_REDUCER}/adicionarRequest` });
    return request;
}

function falha(error) {
    store.dispatch({ type: `${LOADING_REDUCER}/finalizarRequest` });
    return Promise.reject(error)
}


function finalizar(response) {
    store.dispatch({ type: `${LOADING_REDUCER}/finalizarRequest` });
    return response;
}


export default axiosSemAturozicao;
