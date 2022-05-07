import { Box, TextField, Typography } from '@mui/material';
import React from 'react';

export default function ItensProduto(props) {

    return (
        <Box
            sx={{
                paddingTop: "3%",
                rowGap: 3,
                paddingBottom: "3%",
            }}
        >
            <Typography>
                Itens do produto:
            </Typography>
            <TextField
                sx={{width: '140%'}}
                required
                variant="filled"
                id="descricao-do-produto"
                label="Descrição do produto"
                type="text"
            />
            <TextField
                sx={{width: '140%'}}
                required
                variant="filled"
                id="opcao-do-produto"
                label="Opção"
                type="text"
            />
            <TextField
                sx={{width: '140%'}}
                required
                variant="filled"
                id="valor-da-opcao"
                label="Valor"
                type="text"
            />

        </Box>
    );
}



