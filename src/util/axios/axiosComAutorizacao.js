import axios from "axios";
import axiosUtil from "./axiosUtil";
import sessionUtil from "../sessionUtil";

const axiosComAutorizacao = axios.create({
   baseURL: axiosUtil.getBaseUrl(),
    timeout: 15 * 1000,
    headers: {
        Authorization: getBearerToken(),
    }
});

axiosComAutorizacao.interceptors.request.use(
    (request) => axiosUtil.executarRequest(request),
    (error) => axiosUtil.falhar(error)
);

axiosComAutorizacao.interceptors.response.use(
    (request) => axiosUtil.finalizar(request),
    (error) => axiosUtil.falhar(error)
);

function getBearerToken() {
    const token = sessionUtil.getToken();
    return `Bearer ${token}`;
}

export default axiosComAutorizacao;
