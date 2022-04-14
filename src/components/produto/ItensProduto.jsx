import { Box, TextField, Typography } from '@mui/material';
import React from 'react';


export default function ItensProduto() {

    return (
        <Box
            sx={{
                display: 'inline-grid',
                paddingTop: "3%",
                rowGap: 3,                
            }}
        >
            <Typography>
                Itens do produto:
            </Typography>
            <TextField
            sx={{
                width: '90%'
              }}
                required
                variant="filled"
                id="descricao-do-produto"
                label="Descrição do produto"
                type="text"
            />
            <TextField
            sx={{
                width: '90%'
              }}
                required
                variant="filled"
                id="opcao-do-produto"
                label="Opção"
                type="text"
            />

        </Box>
    );
}



