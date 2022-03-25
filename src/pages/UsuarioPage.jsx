import {Box, Button, Grid, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Outlet, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../store/snackbar-reducer";
import {useDispatch} from "react-redux";
import axiosSemAutorizacao from "../util/axios/axiosSemAutorizacao";
import FormUsuario from "../components/usuario/FormUsuario";


export default function UsuarioPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const cadastrarUsuario = async (event) => {
        try {
            const newUsuario = {...event};
            delete newUsuario.repetirSenha;
            await axiosSemAutorizacao.post("/usuarios", {...newUsuario});
            dispatch(mostrarMensagemSucesso('Usuário cadastrado com sucesso.'));
            navigate('/')
        } catch (error) {
            console.error(error);
            dispatch(mostrarMensagemErro('Erro ao cadastrar usuário.'));
        }
    }

    const cancelar = async () => {
        navigate('/')
    }

    return (
       <Box>
           <h1>Usuario</h1>
           <FormUsuario cadastrar={cadastrarUsuario} mostraBotaoCancelar={true} cancelar={cancelar} />
       </Box>
    );
}

