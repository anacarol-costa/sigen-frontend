import {Box, TextField, Typography} from '@mui/material';
import React from 'react';
import OpcaoProdutoList from "../opcao/OpcaoProdutoList";

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
                sx={{width: '100%'}}
                required
                variant="filled"
                id="descricao-do-produto"
                label="Descrição do produto"
                type="text"
            />
            <OpcaoProdutoList />
        </Box>
    );
}



