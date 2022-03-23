import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

export default {

  setPropriedadeCookie(chave, valor, opcoes) {
    cookies.set(chave, valor, opcoes);
  },

  getToken() {
    return getPropriedadeCookie(SessionUtil.TKN);
  },

  getTokenCookieDecode() {
    const TKN = getPropriedadeCookie(SessionUtil.TKN)

    return jwt_decode(TKN);
  }

}

function getPropriedadeCookie(chave) {
  return cookies.get(chave);
}

export const SessionUtil = {
  TKN: 'TKN'
}
