import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

const cookies = new Cookies();

export default {

  setPropriedadeCookie(chave, valor, opcoes) {
    cookies.set(chave, valor, opcoes);
  },

  getPropriedadeCookie(chave) {
    return cookies.get(chave);
  },

  getTokenCookieDecode() {
    const TKN = this.getPropriedadeCookie(SessionUtil.TKN)

    return jwt_decode(TKN);
  }

}


export const SessionUtil = {
  TKN: 'TKN'
}