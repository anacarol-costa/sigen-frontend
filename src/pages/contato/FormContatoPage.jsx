import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import sessionUtil, { SessionUtil } from "../../util/sessionUtil";
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro } from "../../store/snackbar-reducer";


export default function FormContatoPage() {
    const [hora, setHora] = useState('');

    const handleChange = (event) => {
        setHora(event.target.value);
    };


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
            />
            <TextField
                required
                sx={{ width: '30vw' }}
                id="form-email"
                label="E-mail"
                variant="standard"
            />
            <TextField
                required
                sx={{ width: '25vw' }}
                id="telefone"
                label="Telefone"
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
            />
            <TextField
                id="outlined-multiline-static"                
                multiline
                rows={8}
                defaultValue="Olá, gostaria de..."
            />
            <Box>
                <Button>Enviar</Button>
            </Box>
        </Box>
    )

}