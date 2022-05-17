import { Button, FilledInput, FormControl, Grid, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosComAutorizacao from "../util/axios/axiosComAutorizacao";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../store/snackbar-reducer";

export default function ProdutoPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { itensOpcao } = useSelector(state => state.produto);

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório'),
        valorBase: Yup.string().required('campo obrigatório'),
        categoria: Yup.string().required('campo obrigatório'),
        unidadeMedida: Yup.string().required('campo obrigatório'),
    })

    const cadastrarProduto = async (produto) => {
        const novoProduto = { ...produto }
        novoProduto.itensOpcao = itensOpcao;

        try {
            await axiosComAutorizacao.post('/produtos', novoProduto);
            dispatch(mostrarMensagemSucesso('Produto criado com sucesso.'));
            navigate('/private/administracao/produto/lista-produto');
        } catch (error) {
            console.error('Erro ao cadastrar novo produto', error);
            dispatch(mostrarMensagemErro('Erro ao cadastrar novo produto'));
        }

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
                display: 'inline-grid',
                rowGap: 1,
                width: '50%',
                alignItems: "center",
                justifyContent: "center",
                '& > :not(style)': { m: 1, width: '100%' },
            }}
        >
            <Box>
                <h1>Cadastrar Produto</h1>
            </Box>
            <Grid>
                <TextField
                    required
                    sx={{ width: '30vw', m: 2 }}
                    id="nome-produto"
                    label="Nome"
                    variant="standard"
                    {...register('nome')}
                    error={errors.nome ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.nome?.message}
                </Typography>
                <FormControl sx={{ m: 2 }} variant="standard">
                    <InputLabel required htmlFor="standard-adornment-amount">Valor</InputLabel>
                    <Input
                        sx={{ width: '30vw' }}
                        id="valor-produto"
                        variant="standard"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        {...register('valorBase')}
                        error={errors.valorBase ? true : false}
                    />
                </FormControl>
                <Typography variant="inherit" color="#d32f2f">
                    {errors.valorBase?.message}
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
