import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonProduto from "../components/produto/ButtonProduto";
import CategoriaSelect from "../components/produto/CategoriaSelect";
import ItensProduto from "../components/produto/ItensProduto";
import NomeProduto from "../components/produto/NomeProduto";
import UnidadeMedida from "../components/produto/UnidadeMedida";
import ValorProduto from "../components/produto/ValorProduto";

export default function ProdutoPage() {


    return (
        <Box
            sx={{
                // display: 'inline-grid',
                direction: "column",
                // width: '45%',
                bgcolor: 'white',
                paddingTop: '2%'
            }}
        >
            <h1>Cadastrar Produto</h1>
            <Grid
                sx={{
                    // display: 'inline-grid',
                    // direction: "column",
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                <NomeProduto />
                <ValorProduto />
                <CategoriaSelect />
                <UnidadeMedida />
                <ItensProduto />
            </Grid>
            <Box>
                <ButtonProduto />
            </Box>
        </Box>
    )

}
