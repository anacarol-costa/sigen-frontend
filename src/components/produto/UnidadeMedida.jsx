import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form';
import {Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import axiosComAutorizacao from '../../util/axios/axiosComAutorizacao';
import UnidadeMedidaDialog from './UnidadeMedidaDialog';

export default function UnidadeMedida() {
  const [open, setOpen] = useState(false);
  const [unidadesMedida, setUnidadesMedida] = useState([]);

  useEffect(async () => {
    await recuperarUnidadesMedida();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validacaoUnidade = Yup.object().shape({
    abreviacao: Yup.string()
      .required('campo obrigatório')
  })

  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoUnidade)
  })

  const recuperarUnidadesMedida = async () => {
    try {
      const { data } = await axiosComAutorizacao.get("/unidades-medida");
      setUnidadesMedida(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        paddingTop: "3%",
        rowGap: 3,
      }}
    >
        <Box>
            <UnidadeMedidaDialog
                mostrarDialog={open}
                fecharDialog={handleClose}
                atualizarAbreviacaoMedidas={recuperarUnidadesMedida}
            />
          <FormControl sx={{width: '30vw'}} >
            <InputLabel id="demo-simple-select-label" >
              Unidade Medida
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
              <MenuItem onClick={handleClickOpen}>Criar Undiade Medida</MenuItem>
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
          </FormControl>
        </Box>
    </Box>
  )
}

