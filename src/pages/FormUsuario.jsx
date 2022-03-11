import { Button, TextField, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';


export default function FormUsuario() {

  const [cadastro, setCadastro] = useState({ nome: "", email: "", senha: "", repetirSenha: "", telefone: "" });
  const [errorSenhasDiferentes, setErrorSenhasDiferentes] = useState('');

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
      .required('campo obrigatório')
      .min(11),
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
    console.log(event);
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
        display: 'flex',
        flexDirection: 'row-reverse',
        p: 1,
        m: 1,
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
          inputProps={{ textmask: '(#00) 00000-0000', inputMode: 'tel', pattern: '[1-11]' }}
          id="telefone-usuario"
          label="Telefone"
          type="tel"
          autoComplete="current-tel"
          variant="standard"
          {...register('telefone')}
          error={errors.telefone ? true : false}
        />
        <Typography variant="inherit" color="#d32f2f">
          {errors.telefone?.message}
        </Typography>
      </div>

      <Button variant='contained' onClick={handleSubmit(enviarCadastro)}>Enviar</Button>
      <Outlet />
    </ form >

  )
}

