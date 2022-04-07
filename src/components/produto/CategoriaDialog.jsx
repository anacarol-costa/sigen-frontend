import { useTheme } from "@emotion/react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../../store/snackbar-reducer";

export default function CategoriaDialog(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const validacaoCategoria = Yup.object().shape({
    nome: Yup.string()
      .required('campo obrigatório')
  })

  const cadastrarCategoria = async (categoria) => {
    try {
      await axiosComAutorizacao.post("/categorias", categoria)
      dispatch(mostrarMensagemSucesso('Categoria cadastrada com sucesso.'))
      props.fecharDialog();
      await props.atualizarCategoria();            
    } catch (error) {
      console.log(error);
      dispatch(mostrarMensagemErro('Erro ao tentar cadastrar categoria'))
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validacaoCategoria)
  });

  return (
    <Dialog
      open={props.mostrarDialog}
      onClose={props.fecharDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Escreva o nome da nova categoria"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            required
            variant="standard"
            id="nome-categoria"
            label="Categoria"
            type="text"            
            {...register('nome')}
            error={errors.nome ? true : false}
          />
          <Typography variant="inherit" color="#d32f2f">
            {errors.nome?.message}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.fecharDialog}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit(cadastrarCategoria)} autoFocus>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )

}