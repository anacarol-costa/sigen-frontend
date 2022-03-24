import {Box, Button, Grid, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Outlet, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../store/snackbar/snackbar-reducer";
import {useDispatch} from "react-redux";


export default function FormUsuarioPage() {
    const navigate = useNavigate();
    const [cadastro] = useState({nome: "", email: "", senha: "", repetirSenha: "", telefone: ""});
    const [errorSenhasDiferentes, setErrorSenhasDiferentes] = useState('');
    const [telefoneValido] = useState("");
    const dispatch = useDispatch();

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string()
            .required('campo obrigatório')
            .max(20, 'campo excedeu o limite máximo de 20 caracteres'),

        email: Yup.string()
            .required('email obrigatório')
            .email('email inválido'),

        senha: Yup.string()
            .required('campo obrigatório')
            .min(6, 'senha deve possuir no mínimo 6 caracteres')
            .max(40, 'senha excedeu o limite máximo de 40 caracteres'),

        repetirSenha: Yup.string()
            .required('confirme a senha')
            .oneOf([Yup.ref('senha'), null], 'senha incompatível'),

        telefone: Yup.string()
            .required('campo obrigatório'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });

    const cadastrarUsuario = async (event) => {
        try {
            const newUsuario = {...event};
            delete newUsuario.repetirSenha;
            await axios.post("https://sigen-backend.herokuapp.com/usuarios", {...newUsuario});
            dispatch(mostrarMensagemSucesso({mensagem: 'Usuário cadastrado com sucesso.'}));
            navigate('/')
        } catch (error) {
            console.error(error);
            dispatch(mostrarMensagemErro({mensagem: 'Erro ao cadastrar usuário.'}));
        }
    }

    const cancelar = async (event) => {
        navigate('/')
    }

    const verificarSenhas = () => {
        if (cadastro.repetirSenha && cadastro.repetirSenha !== cadastro.senha) {
            setErrorSenhasDiferentes("Senhas diferentes")
        } else {
            setErrorSenhasDiferentes("");
        }
    }


    return (
        <Grid>
            <Box>
                <form
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{minHeight: '70vh'}}
                        gap={2}
                    >
                        <Box>
                            <TextField
                                sx={{width: '30vw'}}
                                required
                                id="nome-usuario"
                                label="Nome"
                                type="string"
                                autoComplete="current-string"
                                variant="standard"
                                {...register('nome')}
                                error={errors.nome ? true : false}
                            />
                            <Typography variant="inherit" color="#d32f2f">
                                {errors.nome?.message}
                            </Typography>
                        </Box>
                        <Box>
                            <TextField
                                sx={{width: '30vw'}}
                                id="email-usuario"
                                label="E-mail"
                                type="string"
                                autoComplete="current-string"
                                variant="standard"
                                {...register('email')}
                                error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="#d32f2f">
                                {errors.email?.message}
                            </Typography>
                        </Box>

                        <Box>
                            <TextField
                                sx={{width: '30vw'}}
                                id="senha-usuario"
                                label="Senha"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                {...register('senha')}
                                error={errors.senha ? true : false}
                            />
                            <Typography variant="inherit" color="#d32f2f">
                                {errors.senha?.message}
                            </Typography>
                        </Box>

                        <Box>
                            <TextField
                                sx={{width: '30vw'}}
                                id="senha-usuario"
                                label="Repetir senha"
                                type="password"
                                helperText={errorSenhasDiferentes}
                                autoComplete="current-password"
                                variant="standard"
                                onBlur={verificarSenhas}
                                {...register('repetirSenha')}
                                error={errors.repetirSenha ? true : false}
                            />
                            <Typography variant="inherit" color="#d32f2f">
                                {errors.repetirSenha?.message}
                            </Typography>

                        </Box>

                        <Box>
                            <TextField
                                sx={{width: '30vw'}}
                                id="telefone"
                                label="Telefone"
                                type="tel"
                                helperText={telefoneValido}
                                autoComplete="current-tel"
                                variant="standard"
                                {...register('telefone')}
                                error={errors.telefone ? true : false}
                            />
                            <Typography variant="inherit" color="#d32f2f">
                                {errors.telefone?.message}
                            </Typography>
                        </Box>


                        <Stack direction="row" spacing={1} sx={{pt: 5}}>
                            <Button
                                size='medium'
                                variant="outlined"
                                startIcon={<DeleteIcon/>}
                                onClick={cancelar}
                            >
                                Cancelar
                            </Button>
                            <Button
                                size='medium'
                                variant="contained"
                                endIcon={<SendIcon/>}
                                onClick={handleSubmit(cadastrarUsuario)}
                            >
                                Enviar
                            </Button>
                        </Stack>
                    </Grid>
                    <Outlet/>
                </ form>
            </Box>
        </Grid>
    );
}

