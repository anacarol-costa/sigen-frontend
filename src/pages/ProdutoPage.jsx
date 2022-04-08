import Box from "@mui/material/Box";
import CategoriaSelect from "../components/produto/CategoriaSelect";
import NomeEvalorProduto from "../components/produto/NomeEvalorProduto";
import UnidadeMedida from "../components/produto/UnidadeMedida";

export default function ProdutoPage() {


    return (
        <Box>
            <h1>Cadastrar Produto</h1>
            <NomeEvalorProduto />
            <CategoriaSelect />
            <UnidadeMedida />
        </Box>
    )

}
