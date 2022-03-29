import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormUsuario(props) {

    const [errorSenhasDiferentes] = useState('');
    const [telefoneValido] = useState("");

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string()
            .required('campo obrigatório')
            .max(128, 'campo excedeu o limite máximo de 128 caracteres'),

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
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });

    const botaoCancelar = () => {
        if (props.mostraBotaoCancelar) {
            return (
                <Button
                    size='medium'
                    variant="outlined"
                    onClick={props.cancelar}
                >
                    Cancelar
                </Button>
            )
        } else {
            return (<></>);
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
                sx={{ width: '30vw' }}
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

            <TextField
                required
                sx={{ width: '30vw' }}
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


            <TextField
                required
                sx={{ width: '30vw' }}
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

            <TextField
                required
                sx={{ width: '30vw' }}
                id="senha-usuario"
                label="Repetir senha"
                type="password"
                helperText={errorSenhasDiferentes}
                autoComplete="current-password"
                variant="standard"
                {...register('repetirSenha')}
                error={errors.repetirSenha ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.repetirSenha?.message}
            </Typography>

            <TextField
                required
                sx={{ width: '30vw' }}
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

            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    width: '100%',
                    gap: 2
                }}
            >
                <Button
                    size='medium'
                    variant="contained"
                    onClick={handleSubmit(props.cadastrar)}
                >
                    Registrar
                </Button>
                {botaoCancelar()}
            </Stack>
        </Box>
    )
}
