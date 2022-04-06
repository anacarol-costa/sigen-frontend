import { Box,FormControl, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import CategoriaDialog from "./CategoriaDialog";

export default function CategoriaSelect() {
 
  const [open, setOpen] = useState(false);
  const categoria = useState({ categoria: '' });
  const [categorias, setCategorias] = useState([]);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(async () => {
    await recuperarCategoria();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validacaoCategoria = Yup.object().shape({
    categoria: Yup.string()
      .required('campo obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoCategoria)
  });


  const recuperarCategoria = async () => {
    try {
      const { data } = await axiosComAutorizacao.get("/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{
      paddingTop: "2%",
    }}
    >
      <CategoriaDialog mostrarDialog={open} fecharDialog={handleClose} />

      <FormControl
        sx={{
          width: '30vw'
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
        >
          Categoria
        </InputLabel>
        <Select
          labelId="categoria-select-label"
          id="categoria-simple-select"
          value={categoria}
          label="Categoria"
          type="object"
          {...register('categoria')}
          error={errors.categoria ? true : false}
        >
          <MenuItem onClick={handleClickOpen}>Criar categoria</MenuItem>
          {categorias.map(categoria =>
            (<MenuItem value={categoria.id}>{categoria.nome}</MenuItem>)
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
