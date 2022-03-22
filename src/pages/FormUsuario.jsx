import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import MaskedInput from "react-input-mask";


export default function FormUsuario() {

  const [cadastro, setCadastro] = useState({ nome: "", email: "", senha: "", repetirSenha: "", telefone: "" });
  const [errorSenhasDiferentes, setErrorSenhasDiferentes] = useState('');
  const [telefoneValido, setTelefoneValido] = useState("");

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
    //control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoSchema)
  });

  const enviarCadastro = async (event) => {
    //console.log(event);
    const newUsuario = { ...event };
    delete newUsuario.repetirSenha;
    await axios.post("https://sigen-backend.herokuapp.com/usuarios", { ...newUsuario });
  }

  const verificarSenhas = () => {
    if (cadastro.repetirSenha && cadastro.repetirSenha !== cadastro.senha) {
      setErrorSenhasDiferentes("Senhas diferentes")
    } else {
      setErrorSenhasDiferentes("");
    }
  }



  return (
    <form
      component="form"
      sx={{
        mx: 'auto',
        width: {
          xs: 100, // theme.breakpoints.up('xs')
          sm: 200, // theme.breakpoints.up('sm')
          md: 300, // theme.breakpoints.up('md')
          lg: 400, // theme.breakpoints.up('lg')
          xl: 500, // theme.breakpoints.up('xl')
        },
        border: '3px solid',
        display: 'flex',
        p: 2,
        m: 2,
        '& > :not(style)': {
          m: 2, width: '28ch'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
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
      </div>

      <div>
        <TextField
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
      </div>

      <div>
        <TextField
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
      </div>

      <div>
        <TextField
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
      </div>

      <div>
        <TextField
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
      </div>

      <Button
        sx={{
          display: 'flex',
          position: 'absolute',
          top: 280,
          left: 'auto',
          rigth: 'auto',
          margin: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          mx: 'auto',
          flexDirection: 'row-reverse',
          width: 200,
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
        variant='contained'
        onClick={handleSubmit(enviarCadastro)}
      >
        Enviar
      </Button>
      <Outlet />
    </ form >

  )
}

