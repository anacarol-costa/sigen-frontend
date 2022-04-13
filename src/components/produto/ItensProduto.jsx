import { Box, TextField, Typography } from '@mui/material';
import React from 'react';


export default function ItensProduto() {

    return (
        <Box
            display='inline'            
            sx={{
                boxShadow: 1,
                width: "300%",
                height: "300%",            
            }}
        >
            <Typography
                sx={{
                    paddingTop: "3%"
                }}
            >
                Itens do produto:
            </Typography>
            <TextField
                required
                variant="standard"
                id="descricao-do-produto"
                label="Descrição do produto"
                type="text"
            />
            <TextField
                required
                variant="standard"
                id="opcao-do-produto"
                label="Opção"
                type="text"
            />

        </Box>
    );
}



