import {FilledInput, Grid, InputAdornment, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import ButtonProduto from "../components/produto/ButtonProduto";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import ItensProduto from "../components/produto/itemProduto/ItensProduto";
// import NomeProduto from "../components/produto/NomeProduto";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
// import ValorProduto from "../components/produto/ValorProduto";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";
import React, {useState} from "react";

export default function ProdutoPage() {
    const [valores, setValores] = useState({ valor: '' });
    const handleChange = (prop) => (event) => {
        setValores({ ...valores, [prop]: event.target.value });
    };


    return (
        <Box
            sx={{
                width: [100, 200, 300, 400, 500],
                paddingTop: '2%',
                paddingLeft: '30%'
            }}
        >
            <h1>Cadastrar Produto</h1>
            <Grid>
                {/*<NomeProduto />*/}
                <TextField
                    required
                    sx={{width: '140%'}}
                    id="nome-produto"
                    label="Nome"
                    variant="filled"
                />
                {/*<ValorProduto />*/}
                <FilledInput
                    sx={{ width: '140%'}}
                    id="valor-produto"
                    value={valores.valor}
                    onChange={handleChange('valor')}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                />
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
