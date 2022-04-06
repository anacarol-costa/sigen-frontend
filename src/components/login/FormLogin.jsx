import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import sessionUtil, { SessionUtil } from "../../util/sessionUtil";
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro } from "../../store/snackbar-reducer";



export function FormularioLogin() {
    const navigate = useNavigate();
    const [formulario] = useState({ email: "", senha: "" });
    const dispatch = useDispatch();

    const validacaoSchema = Yup.object().shape({
        email: Yup.string()
            .required('email obrigatório')
            .email('email inválido'),

        senha: Yup.string()
            .required('campo obrigatório')
            .max(40, 'senha excedeu o limite máximo de 40 caracteres'),

    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });


    const enviarLogin = async (login) => {
        try {
            const { data } = await axiosSemAutorizacao.post("/auth/login", login);
            sessionUtil.setPropriedadeCookie(SessionUtil.TKN, data.access_token, { path: '/' });
            const admin = sessionUtil.isAdmin();
            if (admin) {
                navigate('/private/administracao/home');
              } else {
                navigate('/private/home');
              }
        } catch (error) {
            console.error(error);
            dispatch(mostrarMensagemErro('Error ao tentar realizar login.'))
        }

    }

    return (
        <Box
            sx={{
                display: 'inline-grid',
                rowGap: 1,
                direction: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '100vw',
                paddingTop: 3,
                '& > :not(style)': { m: 1, width: '35ch' },
            }}
        >
            <TextField
                required
                sx={{ width: '30vw' }}
                id="login-email"
                label="E-mail"
                variant="standard"
                value={formulario.usuario}
                {...register('email')}
                error={errors.email ? true : false}

            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.email?.message}
            </Typography>

            <TextField
                required
                sx={{ width: '30vw' }}
                id="login-senha"
                label="Senha"
                type="password"
                variant="standard"
                {...register('senha')}
                error={errors.senha ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.senha?.message}
            </Typography>

            <Box
                sx={{
                    display: 'inline-grid',
                    justifyContent: "center",
                    width: '100%',
                }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit(enviarLogin)}
                >
                    Entrar
                </Button>

            </Box>
        </Box>
    )

}
