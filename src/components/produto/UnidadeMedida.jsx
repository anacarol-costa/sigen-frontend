import React, {useEffect, useState} from 'react'
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import {Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useDispatch} from 'react-redux';
import axiosComAutorizacao from '../../util/axios/axiosComAutorizacao';
import UnidadeMedidaDialog from './UnidadeMedidaDialog';

export default function UnidadeMedida() {
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
    abreviacao: Yup.string()
      .required('campo obrigatório')
  })

  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoUnidade)
  })

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
      }}
    >
        <Box>
            <UnidadeMedidaDialog mostrarDialog={open} fecharDialog={handleClose} atualizarAbreviacaoMedidas={recuperarAbreviacaoMedidas} />
          <FormControl
            sx={{
              width: '30vw',
            }}
          >
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

