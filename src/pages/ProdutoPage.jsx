import {Button, FilledInput, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CategoriaSelect from "../components/produto/categoriaProduto/CategoriaSelect";
import UnidadeMedida from "../components/produto/unidadeMedidaProduto/UnidadeMedida";
import ItemProdutoList from "../components/produto/itemProduto/ItemProdutoList";
import React from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axiosComAutorizacao from "../util/axios/axiosComAutorizacao";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../store/snackbar-reducer";

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
        const novoProduto = {...produto}
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
                width: [100, 200, 300, 400, 500],
                paddingTop: '2%',
                paddingLeft: '30%'
            }}
        >
            <Box
                sx={{ paddingTop: '5%', position:'right' }}
            >
            </Box>
            <h1>Cadastrar Produto</h1>
            <Grid>
                <TextField
                    required
                    sx={{ width: '140%' }}
                    id="nome-produto"
                    label="Nome"
                    variant="standard"
                    {...register('nome')}
                    error={errors.nome ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.nome?.message}
                </Typography>
                <FilledInput
                    sx={{ width: '140%' }}
                    id="valor-produto"
                    variant="standard"
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    {...register('valorBase')}
                    error={errors.valorBase ? true : false}
                />
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
