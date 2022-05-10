import { Button, FilledInput, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosComAutorizacao from "../util/axios/axiosComAutorizacao";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../store/snackbar-reducer";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProdutoPage() {
    const [valores, setValores] = useState({ valor: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (prop) => (event) => {
        setValores({ ...valores, [prop]: event.target.value });
    };

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório'),
        valor: Yup.string().required('campo obrigatório'),
        categoria: Yup.string().required('campo obrigatório'),
        unidadeMedida: Yup.string().required('campo obrigatório'),
        itemProduto: Yup.string().required('campo obrigatório'),
    })

    const cadastrarProduto = async (produto) => {
        console.log(produto);
        const novoProduto = { ...produto };
        novoProduto.valorBase = 0;
        try {
            await axiosComAutorizacao.post('/produtos', novoProduto);
            dispatch(mostrarMensagemSucesso('Usuário excluído com sucesso.'));
        } catch (error) {
            console.error('Erro ao cadastrar novo produto', error);
            dispatch(mostrarMensagemErro('Erro ao cadastrar novo produto'));
        }

    }

    const alterarProdutos = () => {
        navigate('/private/administracao/produto/lista-produto');
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
            <Box
                sx={{ paddingTop: '5%', position:'right' }}
            >
                <Button
                    variant="contained"
                    onClick={(alterarProdutos)}
                    color="secondary"
                >
                    Consultar produtos
                </Button>
            </Box>
            <h1>Cadastrar Produto</h1>
            <Grid>
                <TextField
                    required
                    sx={{ width: '140%' }}
                    id="nome-produto"
                    label="Nome"
                    variant="filled"
                    {...register('nome')}
                    error={errors.nome ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.nome?.message}
                </Typography>
                <FilledInput
                    sx={{ width: '140%' }}
                    id="valor-produto"
                    onChange={handleChange('valor')}
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    {...register('valor')}
                    error={errors.valor ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.valor?.message}
                </Typography>
                <CategoriaSelect formParams={{ errors, register }} />
                <UnidadeMedida formParams={{ errors, register }} />
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
