import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form';
import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import axiosComAutorizacao from '../../../util/axios/axiosComAutorizacao.js';
import UnidadeMedidaDialog from '../unidadeMedidaProduto/UnidadeMedidaDialog';

export default function UnidadeMedida(props) {
  const [open, setOpen] = useState(false);
  const [unidadesMedida, setUnidadesMedida] = useState([]);
  const {errors, register} = props.formParams;

  useEffect(async () => {
    await recuperarUnidadesMedida();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const recuperarUnidadesMedida = async () => {
    try {
      const { data } = await axiosComAutorizacao.get("/unidades-medida");
      setUnidadesMedida(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
        <UnidadeMedidaDialog
            mostrarDialog={open}
            fecharDialog={handleClose}
            atualizarAbreviacaoMedidas={recuperarUnidadesMedida}
        />
      <FormControl sx={{width: '100%'}} >
        <InputLabel id="demo-simple-select-label" >
          Unidade Medida
        </InputLabel>
        <Select
          required
          sx={{width: '140%'}}
          labelId="abreviacao-select-label"
          id="abreviacao-simple-select"
          label="Abreviação"
          type="object"
          variant="filled"
          {...register('unidadeMedida')}
          error={errors.unidadeMedida ? true : false}
        >
          <MenuItem onClick={handleClickOpen}>Criar Unidade de Medida</MenuItem>
          {unidadesMedida.map((unidadeMedida) =>
            (
              <MenuItem
                key={unidadeMedida.id}
                value={unidadeMedida.id}>
                {unidadeMedida.descricao}
              </MenuItem>
            )
          )}
        </Select>
        <Typography variant="inherit" color="#d32f2f">
          {errors.unidadeMedida?.message}
        </Typography>
      </FormControl>
    </Box>
  )
}

