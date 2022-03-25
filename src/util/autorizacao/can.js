import sessionUtil from "../sessionUtil";

const ADMINISTRADOR = 'ADMINISTRADOR';

export function apenasAdministrador() {
    const { permissao } = sessionUtil.getTokenCookieDecode();

    return permissao === ADMINISTRADOR;
}



