import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default {

  setPropriedadeCookie(chave, valor, opcoes) {
    cookies.set(chave, valor, opcoes);
  },

  getPropriedadeCookie(chave) {
    return cookies.get(chave);
  }

}