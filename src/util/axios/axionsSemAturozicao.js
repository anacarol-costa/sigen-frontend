import axios from 'axios';
import store from "../../store/store";
import {LOADING_REDUCER} from "../../store/loading-reducer";


const axionsSemAturozicao = axios.create({
    baseURL: 'https://sigen-backend.herokuapp.com/',
    timeout: 15 * 1000,
});

function getBaseUrl() {

    return process.env.URL_BACKEND;
}

axionsSemAturozicao.interceptors.request.use(
    (request) => executarRequest(request),
    (error) => falha(error)
);

axionsSemAturozicao.interceptors.response.use(
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


export default axionsSemAturozicao;
