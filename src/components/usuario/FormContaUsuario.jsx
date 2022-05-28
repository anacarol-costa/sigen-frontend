import { Box, TextField, InputLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import sessionUtil from "../../util/sessionUtil";

export default function FormContaUsuario(props) {
    const { id } = useParams();
    const [conta, setConta] = useState({});
    const [endereco, setEndereco] = useState({});

    useEffect(async () => {
        const { data } = await axiosComAutorizacao.get(`/usuarios/${id}`)
        setConta(data);
        setEndereco(data.endereco);
    }, []);



    return (
        <Box sx={{ display: 'inline-grid' }}>
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="nome-usuario"
                label="Nome"
                value={conta.nome}
                type="string"
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="email-usuario"
                label="Email"
                value={conta.email}
                type="string"

            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="senha-usuario"
                label="Senha"
                value={conta.senha}
                type="string"
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="telefone-usuario"
                label="Telefone"
                value={conta.telefone}
                type="string"
            />
            <InputLabel id="label-endereço" sx={{ paddingTop: '6%', paddingBottom:'2%' }} align="left">
                Endereço
            </InputLabel>
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="cep-usuario"
                label="CEP"
                value={endereco.cep}
                type="string"                
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="bairro-usuario"
                label="Bairro"
                value={endereco.bairro}
                type="string"                
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="quadra-usuario"
                label="Quadra"
                value={endereco.quadra}
                type="string"                
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="complemento-usuario"
                label="Complemento"
                value={endereco.complemento}
                type="string"                
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                disabled
                id="ponto-referencia-usuario"
                label="Ponto de referência"
                value={endereco.pontoReferencia}
                type="string"              
            />
        </Box>
    )
}