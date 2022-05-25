import { Box, TextField, InputLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import sessionUtil from "../../util/sessionUtil";

export default function FormContaUsuario(props) {
    const { id } = useParams();
    const [conta, setConta] = useState({});

    useEffect(async () => {
        const { data } = await axiosComAutorizacao.get(`/usuarios/${id}`)                
        setConta(data);
    }, []);



    return (
        <Box sx={{ display: 'inline-grid' }}>
            <Typography>
                Nome {conta.nome}
            </Typography>
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="nome-usuario"
                label="Nome"
                type="string"
                variant="standard"
                {...conta.nome}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="email-usuario"
                label="Email"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="senha-usuario"
                label="Senha"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="telefone-usuario"
                label="Telefone"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />

            <InputLabel id="label-endereço" sx={{ paddingTop: '6%' }} align="left">
                Endereço
            </InputLabel>
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="cep-usuario"
                label="CEP"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="bairro-usuario"
                label="Bairro"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="quadra-usuario"
                label="Quadra"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="complemento-usuario"
                label="Complemento"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="ponto-referencia-usuario"
                label="Ponto de referência"
                type="string"
                variant="standard"
            // onLoad={recuperarDadosUsuario}
            />
        </Box>
    )
}