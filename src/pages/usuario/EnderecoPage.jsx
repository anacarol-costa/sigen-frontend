import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button, Typography} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../../store/snackbar-reducer";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import sessionUtil from "../../util/sessionUtil";

export default function EnderecoPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validacaoSchema = Yup.object().shape({
        cep: Yup.string()
            .required('campo obrigatório')
            .max(40, 'senha excedeu o limite máximo de 40 caracteres'),

        bairro: Yup.string()
            .required('campo obrigatório')
            .max(40, 'você excedeu o limite máximo de 40 caracteres'),

        complemento: Yup.string()
            .required('campo obrigatório')
            .max(45, 'você excedeu o limite máximo de 45 caracteres'),

        pontoReferencia: Yup.string()
            .required('campo obrigatório'),

        quadra: Yup.string()
            .required('campo obrigatório')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });


    const enviarFormContato = async (endereco) => {
        const payload = { usuario: sessionUtil.getIdUsuario(), endereco };
        try {
            await axiosSemAutorizacao.post('/usuarios/endereco', payload);
            dispatch(mostrarMensagemSucesso('Contato enviado com sucesso. Em breve, entraremos em contato.'));
        } catch (error) {
            console.error(error);
            dispatch(mostrarMensagemErro('Error ao tentar enviar contato.'))
        }
    }


    return (
        <Box
            sx={{
                display: 'inline-grid',
                rowGap: 1,
                direction: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '100%',
                paddingTop: 3,
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
        >
            <Box sx={{ paddingBottom: "3%" }}>
                <h1>Endereço</h1>
            </Box>
            <TextField
                required
                sx={{ width: '30vw' }}
                id="form-cep"
                label="CEP"
                variant="standard"
                {...register('cep')}
                error={errors.cep ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.cep?.message}
            </Typography>
            <TextField
                required
                sx={{ width: '30vw' }}
                id="form-bairro"
                label="Bairro"
                variant="standard"
                {...register('bairro')}
                error={errors.bairro ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.bairro?.message}
            </Typography>
            <TextField
                sx={{ width: '25vw' }}
                id="complemento"
                label="Complemento"
                type="tel"
                autoComplete="current-tel"
                variant="standard"
                {...register('complemento')}
                error={errors.complemento ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.complemento?.message}
            </Typography>

            <TextField
                required
                sx={{ width: '25vw' }}
                id="pontoReferencia"
                label="Ponto de Referência"
                type="text"
                variant="standard"
                {...register('pontoReferencia')}
                error={errors.pontoReferencia ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.pontoReferencia?.message}
            </Typography>

            <TextField
                required
                sx={{ width: '25vw' }}
                id="quadra"
                label="Quadra"
                type="text"
                variant="standard"
                {...register('quadra')}
                error={errors.quadra ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.quadra?.message}
            </Typography>

            <Box>
                <Button variant="contained" onClick={handleSubmit(enviarFormContato)}>Enviar</Button>
            </Box>
        </Box>
    )
}
