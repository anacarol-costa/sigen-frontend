import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {React, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import axiosComAutorizacao from "../../../util/axios/axiosComAutorizacao";
import CategoriaDialog from "../categoriaProduto/CategoriaDialog";

export default function CategoriaSelect() {

  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);



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
    <Box>
      <CategoriaDialog
          mostrarDialog={open}
          fecharDialog={handleClose}
          atualizarCategoria={recuperarCategoria}
      />

      <FormControl sx={{width: '100%'}} >
        <InputLabel
          id="demo-simple-select-label"
        >
          Categoria
        </InputLabel>
        <Select
          required
          sx={{width: '140%'}}
          labelId="categoria-select-label"
          id="categoria-simple-select"
          label="Categoria"
          type="object"
          variant="filled"
          {...register('categoria')}
          error={errors.categoria ? true : false}
        >
          <MenuItem onClick={handleClickOpen}>Criar categoria</MenuItem>
          {categorias.map(categoria =>
          (<MenuItem
            key={categoria.id} value={categoria.id}>
            {categoria.nome}
          </MenuItem>)
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
