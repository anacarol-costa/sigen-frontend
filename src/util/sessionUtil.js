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
  },

  getNomeUsuario() {
    const {nome} = this.getTokenCookieDecode()
    return nome;
  },

  removerTknCookie() {
    cookies.remove(SessionUtil.TKN,  { path: '/' });
  }
}

function getPropriedadeCookie(chave) {
  return cookies.get(chave);
}

export const SessionUtil = {
  TKN: 'TKN'
}

export const Permissao = {
  ADMINISTRADOR: 'ADMINISTRADOR',
  COMUM: 'COMUM',
}
