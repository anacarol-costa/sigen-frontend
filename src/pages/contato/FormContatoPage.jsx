import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";

export default function FormContatoPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hora, setHora] = useState('');

    const handleChange = (event) => {
        setHora(event.target.value);
    };

    const validacaoSchema = Yup.object().shape({
        nome: Yup.string()
            .required('campo obrigatório')
            .max(40, 'senha excedeu o limite máximo de 40 caracteres'),


        email: Yup.string()
            .required('campo obrigatório')
            .max(40, 'você excedeu o limite máximo de 40 caracteres'),

        assunto: Yup.string()
            .required('campo obrigatório')
            .max(45, 'você excedeu o limite máximo de 45 caracteres'),

        multiline: Yup.string()
            .required('campo obrigatório')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoSchema)
    });

    const enviarFormContato = async () => {
        // try {
        //     const { data } = await axiosSemAutorizacao.post("/auth/login");            
        //     dispatch(mostrarMensagemSucesso('Contato enviado com sucesso. Em breve, entraremos em contato.'))
        // } catch (error) {
        //     console.error(error);
        //     dispatch(mostrarMensagemErro('Error ao tentar enviar contato.'))
        // }

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
                <h1>Contato</h1>
            </Box>
            <TextField
                required
                sx={{ width: '30vw' }}
                id="form-nome"
                label="Nome"
                variant="standard"
                {...register('nome')}
                error={errors.nome ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.nome?.message}
            </Typography>
            <TextField
                required
                sx={{ width: '30vw' }}
                id="form-email"
                label="E-mail"
                variant="standard"
                {...register('email')}
                error={errors.email ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.email?.message}
            </Typography>
            <TextField
                sx={{ width: '25vw' }}
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                autoComplete="current-tel"
                variant="standard"
            />

            <FormControl sx={{ width: '30%' }}>
                <InputLabel id="demo-simple-select-label">Melhor horário para entrar em contato</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hora}
                    label="Hora"
                    variant="standard"
                    onChange={handleChange}
                >
                    <MenuItem value={12}>12h</MenuItem>
                    <MenuItem value={13}>13h</MenuItem>
                    <MenuItem value={14}>14h</MenuItem>
                    <MenuItem value={15}>15h</MenuItem>
                    <MenuItem value={16}>16h</MenuItem>
                    <MenuItem value={17}>17h</MenuItem>
                    <MenuItem value={18}>18h</MenuItem>
                </Select>
            </FormControl>
            <TextField
                required
                sx={{ width: '25vw' }}
                id="assunto"
                label="Assunto"
                type="text"
                variant="standard"
                {...register('assunto')}
                error={errors.assunto ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.assunto?.message}
            </Typography>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={8}
                defaultValue="Olá, gostaria de..."
                {...register('multiline')}
                error={errors.multiline ? true : false}
            />
            <Typography variant="inherit" color="#d32f2f">
                {errors.multiline?.message}
            </Typography>
            <Box>
                <Button variant="contained" onClick={handleSubmit(enviarFormContato)}>Enviar</Button>
            </Box>
        </Box>
    )

}