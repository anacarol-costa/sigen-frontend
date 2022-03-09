import { FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function FormUsuario() {


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

        />
      </div>

      <div>
        <TextField
          id="email-usuario"
          label="E-mail"
          type="string"
          autoComplete="current-string"
          variant="standard" />
      </div>

      <div>
        <TextField
          id="senha-usuario"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>

      <div>
        <TextField
          id="senha-usuario"
          label="Repetir senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
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
        />

        {/* to do: arrumar o inputprops */}

      </div>

    </ form >

  )
}

