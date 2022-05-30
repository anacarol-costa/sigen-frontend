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
            <InputLabel id="label-nome" size="small" align="left">
                Nome
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="nome-usuario"
                value={conta.nome}
                type="string"
            />

            <InputLabel id="label-email" size="small" sx={{ paddingTop: '2%' }} align="left">
                E-mail
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="email-usuario"
                value={conta.email}
                type="string"

            />

            <InputLabel id="label-senha" size="small" sx={{ paddingTop: '2%' }} align="left">
                Senha
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="senha-usuario"
                value={conta.senha}
                type="password"
            />

            <InputLabel id="label-telefone" size="small" sx={{ paddingTop: '2%' }} align="left">
                Telefone
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="telefone-usuario"
                value={conta.telefone}
                type="tel"
            />
            <InputLabel id="label-endereço" sx={{ paddingTop: '6%' }} align="left">
                Endereço
            </InputLabel>

            <InputLabel id="label-cep" size="small" align="left">
                CEP
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="cep-usuario"
                value={endereco.cep}
                type="string"
            />

            <InputLabel id="label-bairro" size="small" sx={{ paddingTop: '2%' }} align="left">
                Bairro
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="bairro-usuario"
                value={endereco.bairro}
                type="string"
            />

            <InputLabel id="label-quadra" size="small" sx={{ paddingTop: '2%' }} align="left">
                Quadra
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="quadra-usuario"
                value={endereco.quadra}
                type="string"
            />

            <InputLabel id="label-quadra" size="small" sx={{ paddingTop: '2%' }} align="left">
                Quadra
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="complemento-usuario"
                value={endereco.complemento}
                type="string"
            />

            <InputLabel id="label-ponto-referencia-usuario" size="small" sx={{ paddingTop: '2%' }} align="left">
                Ponto de referência
            </InputLabel>
            <TextField
                variant="standard"
                InputProps={{
                    readOnly: true,
                }}
                sx={{ width: '40vw', m: 1 }}
                id="ponto-referencia-usuario"
                value={endereco.pontoReferencia}
                type="string"
            />
        </Box>
    )
}