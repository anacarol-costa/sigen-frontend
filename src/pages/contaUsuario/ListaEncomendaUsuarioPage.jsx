import { Box } from "@mui/system";
import ListaMinhasEncomendas from "../../components/encomenda/ListaMinhasEncomendas";

export default function ListaEncomendaUsuarioPage() {
    return(
        <Box>
            <h1>Minhas encomendas</h1>
            <ListaMinhasEncomendas />
        </Box>
    )
}