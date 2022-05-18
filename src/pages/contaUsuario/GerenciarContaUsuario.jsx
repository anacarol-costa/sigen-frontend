import { Box } from "@mui/system";
import FormContaUsuario from "../../components/usuario/FormContaUsuario";

export default function GerenciarContaUsuarioPage() {
    return (
        <Box>
            <h1>Gerenciar conta</h1>
            <Box>
                <FormContaUsuario />
            </Box>
        </Box>
        
    )
}