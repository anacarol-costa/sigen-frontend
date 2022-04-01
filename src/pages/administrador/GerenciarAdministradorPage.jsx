import Box from "@mui/material/Box";
import FormUsuario from "../../components/usuario/FormUsuario";
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../../store/snackbar-reducer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export default function AdministradorPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cadastrarAdministrador = async (event) => {
        try {
            const newUsuario = {...event};
            delete newUsuario.repetirSenha;
            await axiosSemAutorizacao.post("/administradores", {...newUsuario});
            dispatch(mostrarMensagemSucesso('Usuário administrador cadastrado com sucesso.'));
            navigate('/')
        } catch (error) {
            console.error(error);
            dispatch(mostrarMensagemErro('Erro ao cadastrar usuário administrador.'));
        }
    }


    return (
        <Box>
            <h1>Adm</h1>
            <FormUsuario cadastrar={cadastrarAdministrador} />
        </Box>
    )

}
