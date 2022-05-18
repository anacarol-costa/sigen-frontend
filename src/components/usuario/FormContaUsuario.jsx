import { Box, TextField, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import sessionUtil from "../../util/sessionUtil";

export default function FormContaUsuario(props) {
    const [form, setForm] = useState([]);
    const [endereco] = useState({ cep: 'CEP', quadra: 'Quadra', bairro: 'Bairro', complemento: 'Complemento', pontoReferencia: 'Ponto de referência' })

    useEffect(async () => {
        await recuperarDadosUsuario();
    }, []);

    const recuperarDadosUsuario = async () => {
        try {
            const { data } = await axiosComAutorizacao.get(`/usuarios/${sessionUtil.getIdUsuario()}`);
            setForm(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleObterDadosUsuario = ({ nome, email, senha, telefone, endereco }) => {
        const dadosUsuario = [...form]
    }

    return (
        <Box sx={{ display: 'inline-grid' }}>
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="nome-usuario"
                label="Nome"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1 }}
                // disabled
                id="email-usuario"
                label="Email"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="senha-usuario"
                label="Senha"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="telefone-usuario"
                label="Telefone"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />

            <InputLabel id="label-endereço" sx={{ paddingTop: '6%' }} align="left">
                Endereço
            </InputLabel>
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="cep-usuario"
                label="CEP"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="bairro-usuario"
                label="Bairro"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="quadra-usuario"
                label="Quadra"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="complemento-usuario"
                label="Complemento"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
            <TextField
                sx={{ width: '40vw', m: 1  }}
                // disabled
                id="ponto-referencia-usuario"
                label="Ponto de referência"
                type="string"
                variant="standard"
                onLoad={recuperarDadosUsuario}
            />
        </Box>

    )
}