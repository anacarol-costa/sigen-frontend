import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';



export function FormularioLogin(props) {

    const [formulario, setFormulario] = useState({ usuario: "", senha: "" });

    const enviarLogin = () => {
        console.log(formulario)
    }

    return (
        <Box
            sx={{
                display: 'inline-grid',
                rowGap: 3,
                direction:"column",
                alignItems:"center",
                justifyContent:"center",
                width: '100vw',
            }}
        >
            <Box>
                <TextField
                    sx={{ width: '30vw' }}
                    id="login-usuario"
                    label="Usuário"
                    variant="standard"
                    value={formulario.usuario}
                    onChange={(e) => setFormulario({ ...formulario, usuario: e.target.value })}
                />
            </Box>
            <Box>
                <TextField
                    sx={{ width: '30vw' }}
                    id="login-senha"
                    label="Senha"
                    variant="standard"
                    value={formulario.senha}
                    name="senha"
                    onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })}
                />
            </Box>
            <Box sx={{
                display: 'inline-grid',
                justifyContent:"center",
                width: '100%',
            }}>
                <Button variant="contained" onClick={enviarLogin}>Entrar</Button>
            </Box>
            <Outlet />
        </Box>
    )

}
