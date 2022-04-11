import React from 'react'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { mostrarMensagemErro, mostrarMensagemSucesso } from '../../store/snackbar-reducer';
import axiosSemAturozicao from '../../util/axios/axiosSemAutorizacao';

export default function UnidadeMedidaPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validacaoUnidade = Yup.object().shape({
    descricao: Yup.string()
      .required('campo obrigatório'),

    abreviacao: Yup.string()
      .required('campo obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoUnidade)
  })

  const cadastrarUnidadeMedida = async (unidadeMedida) => {
    try {
      await axiosSemAturozicao.post("/unidades-medida", unidadeMedida)
      dispatch(mostrarMensagemSucesso('Unidade de medida cadastrada com sucesso.'))
      navigate('/home');
    } catch (error) {
      console.error(error);
      dispatch(mostrarMensagemErro('Erro ao tentar cadastrar unidade de medida.'))
    }

  }

  return (
    <Box
      sx={{
        display: 'inline-grid',
        paddingTop: "3%",
        rowGap: 3,
        direction: "column",
        width: '100%',        
      }}
    >
      <Typography
        variant='subtitle1'
      >Unidade de Medida:</Typography>
      <Box>
        <TextField
          required
          sx={{
            width: '60%'
          }}
          id="descricao-unidade-medida"
          label="Descrição"
          type="string"
          variant="filled"
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
          sx={{ width: '60%' }}
          id="abreviacao-unidade"
          label="Abreviação"
          type="string"
          variant="filled"
          {...register('abreviacao')}
          error={errors.abreviacao ? true : false}
        />
        <Typography variant="inherit" color="#d32f2f">
          {errors.abreviacao?.message}
        </Typography>
      </Box>
    </Box>
  )
}

