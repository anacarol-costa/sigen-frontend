import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';


export function FormularioLogin(props) {

    const [formulario, setFormulario] = useState({usuario: "", senha: ""});  
    
    
    const enviarLogin = (event) => {
        console.log(formulario)
    }
    

    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
                error
                id="login-usuario"
                label="Usuário"          
                variant="filled"
                value={formulario.usuario}
                onChange={(e) => setFormulario({...formulario, usuario: e.target.value })}
            />
            <TextField
                error
                id="login-senha"
                label="Senha"          
                helperText="Entrada incorreta."
                variant="filled"
                value={formulario.senha}
                name="senha"
                onChange={(e) => setFormulario({...formulario, senha: e.target.value })}
            />
            </div>
            <Button variant="contained" onClick={enviarLogin}>Entrar</Button>
            <Outlet />
        </Box>
    )

}
