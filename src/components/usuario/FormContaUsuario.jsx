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
            <Box>
                <InputLabel id="label-nome" size="small" align="left">
                    Nome
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-email" size="small" sx={{ paddingTop: '2%' }} align="left">
                    E-mail
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-senha" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Senha
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-telefone" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Telefone
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-endereço" sx={{ paddingTop: '6%' }} align="left">
                    Endereço
                </InputLabel>
            </Box>
            <Box>
                <InputLabel id="label-cep" size="small" align="left">
                    CEP
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-bairro" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Bairro
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-quadra" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Quadra
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-quadra" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Quadra
                </InputLabel>
            </Box>
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

            <Box>
                <InputLabel id="label-ponto-referencia-usuario" size="small" sx={{ paddingTop: '2%' }} align="left">
                    Ponto de referência
                </InputLabel>
            </Box>
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