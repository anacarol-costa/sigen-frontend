import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { mostrarMensagemErro, mostrarMensagemSucesso } from '../../store/snackbar-reducer';
import axiosSemAturozicao from '../../util/axios/axiosSemAutorizacao';
import axiosComAutorizacao from '../../util/axios/axiosComAutorizacao';
import MedidaAbreviacaoDialog from './MedidaAbreviacaoDialog';

export default function UnidadeMedidaPage() {
  const [open, setOpen] = useState(false);
  const abreviacaoMedida = useState({ abreviacao: '' });
  const [abreviacaoMedidas, setAbreviacaoMedidas] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(async () => {
    await recuperarAbreviacaoMedidas();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const recuperarAbreviacaoMedidas = async () => {
    try {
      const { data } = await axiosComAutorizacao.get("/unidades-medida");
      setAbreviacaoMedidas(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        
        paddingTop: "3%",
        rowGap: 3,
        // direction: "column",
        width: '100%',
        bgcolor: 'yellow',
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
        <MedidaAbreviacaoDialog mostrarDialog={open} fecharDialog={handleClose} atualizarAbreviacaoMedidas={recuperarAbreviacaoMedidas} />
        <FormControl
          sx={{
            width: '30vw',
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
          >
            Abreviação
          </InputLabel>
          <Select
            required
            sx={{
              m: 1,
              width: '60%',
            }}
            labelId="abreviacao-select-label"
            id="abreviacao-simple-select"
            label="Abreviação"
            type="object"
            variant="filled"
            {...register('abreviacao')}
            error={errors.abreviacao ? true : false}
          >
            <MenuItem onClick={handleClickOpen}>Acrescentar abreviação de medida</MenuItem>
            {abreviacaoMedidas.map(abreviacao =>
            (<MenuItem
              key={abreviacaoMedida.id} value={abreviacaoMedida.id}>
              {abreviacaoMedida.abreviacao}
            </MenuItem>)
            )}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

