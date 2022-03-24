import React, { useState } from 'react'
import * as Yup from "yup";
import { Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import sessionUtil, { SessionUtil } from "../../util/sessionUtil";
import { Box, Button, TextField, Typography } from '@mui/material';

export default function CadastroUnidadeMedidaPage() {
  const navigate = useNavigate();
  const [unidade, setUnidade] = useState({ descricao: "", abreviacao: "" })

  const validacaoUnidade = Yup.object().shape({
    descricao: Yup.number()
      .required('campo obrigatório')
      .descricao('descricao inválida'),

    abreviacao: Yup.string()
      .required('campo obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: Yup.Resolver(validacaoUnidade)
  })

  const cadastrarUnidadeMedida = async (unidadeMedida) => {
    const { data } = await axios.post("https://sigen-backend.herokuapp.com/api/#/Unidade%20Medida/UnidadeMedidaController_create", unidadeMedida)

    sessionUtil.setPropriedadeCookie(SessionUtil.TKN, data.access_token, { path: '/home' })

    navigate('/home')
  }


  return (
    <Box
      sx={{
        display: 'inline-grid',
        rowGap: 3,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100vw',
      }}
    >
      <Box>
        <TextField
          required
          sx={{ width: '30vw' }}
          id="descricao-unidade-medida"
          label="Descrição"
          type="string"
          variant="standard"
          value={unidade.descricao}
          {...register('descricao')}
          error={errors.descricao ? true : false}
        />
        <Typography variant="inherit" color="#d32f2f">
          {errors.descricao?.message}
        </Typography>
      </Box>
      <Box>
        <TextField
          required
          sx={{ width: '30vw' }}
          id="abreviacao-unidade"
          label="Abreviação"
          type="string"
          variant="standard"
          {...register('abreviacao')}
          error={errors.abreviacao ? true : false}
        />
        <Typography variant="inherit" color="#d32f2f">
          {errors.abreviacao?.message}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'inline-grid',
          justifyContent: "center",
          width: '100%',
        }}>
        <Button
          variant="contained"
          onClick={handleSubmit(cadastrarUnidadeMedida)}
        >
          Entrar
        </Button>
      </Box>
      <Outlet />
    </Box>
  )

}

