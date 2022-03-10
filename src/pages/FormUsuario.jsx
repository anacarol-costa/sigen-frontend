import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { Component, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


export default function FormUsuario() {

  const [cadastro, setCadastro] = useState({ nome: "", email: "", senha: "", repetirSenha: "", telefone: "" });
  const [errorSenhasDiferentes, setErrorSenhasDiferentes] = useState('');

  const enviarCadastro = async (event) => {
    const newUsuario = { ...cadastro };
    delete newUsuario.repetirSenha;
    await axios.post("https://sigen-backend.herokuapp.com/usuarios", { ...newUsuario });
  }

  const verificarSenhas = () => {
    if (cadastro.repetirSenha && cadastro.repetirSenha !== cadastro.senha) {
      setErrorSenhasDiferentes("Senhas diferentes");
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
          id="nome-usuario"
          label="Nome"
          type="string"
          autoComplete="current-string"
          variant="standard"
          onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
        />
      </div>

      <div>
        <TextField
          id="email-usuario"
          label="E-mail"
          type="string"
          autoComplete="current-string"
          variant="standard"
          onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
        />
      </div>

      <div>
        <TextField
          id="senha-usuario"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
        />
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
          onChange={(e) => setCadastro({ ...cadastro, repetirSenha: e.target.value })}
        />
      </div>

      <div>
        <TextField
          inputProps={{ textmask: '(#00) 00000-0000', inputMode: 'tel', pattern: '[1-11]' }}
          id="telefone-usuario"
          label="Telefone"
          type="tel"
          autoComplete="current-tel"
          variant="standard"
          onChange={(e) => setCadastro({ ...cadastro, telefone: e.target.value })}
        />


        {/* to do: arrumar o inputprops */}

      </div>
      <Button variant='contained' onClick={enviarCadastro}>Enviar</Button>
      <Outlet />
    </ form >

  )
}

