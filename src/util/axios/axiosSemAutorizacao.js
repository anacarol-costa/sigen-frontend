import axios from 'axios';
import store from "../../store/store";
import {LOADING_REDUCER} from "../../store/loading-reducer";
import axiosUtil from "./axiosUtil";

const axiosSemAturozicao = axios.create({
    baseURL: axiosUtil.getBaseUrl(),
    timeout: 15 * 1000,
});

axiosSemAturozicao.interceptors.request.use(
    (request) => axiosUtil.executarRequest(request),
    (error) => axiosUtil.falhar(error)
);

axiosSemAturozicao.interceptors.response.use(
    (request) => axiosUtil.finalizar(request),
    (error) => axiosUtil.falhar(error)
)

export default axiosSemAturozicao;
