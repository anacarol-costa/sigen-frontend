import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonProduto from "../components/produto/ButtonProduto";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import ItensProduto from "../components/produto/itemProduto/ItensProduto";
import NomeProduto from "../components/produto/NomeProduto";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
import ValorProduto from "../components/produto/ValorProduto";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";

export default function ProdutoPage() {


    return (
        <Box
            sx={{
                width: [100, 200, 300, 400, 500],
                paddingTop: '2%'
            }}
        >
            <h1>Cadastrar Produto</h1>
            <Grid>
                <NomeProduto />
                <ValorProduto />
                <CategoriaSelect />
                <UnidadeMedida />
                <ItensProduto />
                <ItemProdutoList />
            </Grid>
            <Box>
                <ButtonProduto />
            </Box>
        </Box>
    )

}
