import {Button, FilledInput, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ButtonProduto from "../components/produto/ButtonProduto";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import ItensProduto from "../components/produto/itemProduto/ItensProduto";
// import NomeProduto from "../components/produto/NomeProduto";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
// import ValorProduto from "../components/produto/ValorProduto";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";
import React, {useState} from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export default function ProdutoPage() {
    const [valores, setValores] = useState({ valor: '' });

    const handleChange = (prop) => (event) => {
        setValores({ ...valores, [prop]: event.target.value });
    };

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório'),
        valor: Yup.string().required('campo obrigatório'),
        categoria: Yup.string().required('campo obrigatório'),
        unidadeMedida: Yup.string().required('campo obrigatório'),

    })

    const cadastrarProduto = (produto) => {
        console.log(produto);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });


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
                    {...register('nome')}
                    error={errors.nome ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.nome?.message}
                </Typography>
                {/*<ValorProduto />*/}
                <FilledInput
                    sx={{ width: '140%'}}
                    id="valor-produto"
                    onChange={handleChange('valor')}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    {...register('valor')}
                    error={errors.valor ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.valor?.message}
                </Typography>
                <CategoriaSelect formParams={{errors, register}} />
                <UnidadeMedida formParams={{errors, register}}/>
                <ItensProduto />
                <ItemProdutoList />
            </Grid>
            <Box>
                <Button
                    variant="contained"
                    onClick={handleSubmit(cadastrarProduto)}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    )

}
