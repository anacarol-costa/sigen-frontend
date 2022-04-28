import { Box, Button, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";

export default function ImagemUpload(props) {
    const dispatch = useDispatch();

    const uploadImagem = async (carrossel) => {
        try {
            await axiosComAutorizacao.post("/carrosseis", carrossel)
            dispatch(mostrarMensagemSucesso('Imagem salva com sucesso.'))
            props.fecharDialog();
        } catch (error) {
            console.log(error);
            dispatch(mostrarMensagemErro('Erro ao tentar salvar imagem'))
        }
    }


    return (
        <div>
            <h1>Carrossel de Imagens</h1>
            <p>Abaixo faça o upload das imagens, as quais farão parte do carrossel da Home Page do cliente</p>
            <Box>
                <Input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="imagem-upload"
                    multiple
                    inputComponent={'input'}
                />
                <label htmlFor="imagem-upload" />
                <Button variant="contained" component="span" onClick={uploadImagem}>
                    Upload
                </Button>
            </Box>
        </div>
    )
}