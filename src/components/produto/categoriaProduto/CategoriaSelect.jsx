import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {React, useEffect, useState} from "react";
import axiosComAutorizacao from "../../../util/axios/axiosComAutorizacao";
import CategoriaDialog from "../categoriaProduto/CategoriaDialog";

export default function CategoriaSelect(props) {

  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const { errors, register } = props.formParams;



  useEffect(async () => {
    await recuperarCategoria();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const recuperarCategoria = async () => {
    try {
      const { data } = await axiosComAutorizacao.get("/categorias");
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ m: 2 }} >
      <CategoriaDialog
          mostrarDialog={open}
          fecharDialog={handleClose}
          atualizarCategoria={recuperarCategoria}
      />

      <FormControl>
        <InputLabel
          id="demo-simple-select-label"
        >
          Categoria
        </InputLabel>
        <Select
          required
          sx={{ width: '30vw' }}
          labelId="categoria-select-label"
          id="categoria-simple-select"
          label="Categoria"
          type="object"
          variant="standard"
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
        <Typography variant="inherit" color="#d32f2f">
          {errors.categoria?.message}
        </Typography>
      </FormControl>
    </Box>
  );
}
