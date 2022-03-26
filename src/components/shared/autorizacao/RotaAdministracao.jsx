import sessionUtil, {Permissao} from "../../../util/sessionUtil";
import {Navigate} from "react-router-dom";

export default function RotaAdministracao({ children }) {

    const { permissao } = sessionUtil.getTokenCookieDecode();

    if(permissao !== Permissao.ADMINISTRADOR) {
        return <Navigate to="/private/home" replace />;
    }

    return children;

}
