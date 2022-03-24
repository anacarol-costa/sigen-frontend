import axios from 'axios';


export default function axionsNonAuth() {
    axios.create({
        baseURL: getBaseUrl(),
        timeout: 1000,
    })
}

function getBaseUrl() {
    return process.env.URL_BACKEND_LOCAL || process.env.URL_BACKEND;
}
