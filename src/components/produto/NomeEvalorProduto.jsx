import React, { Component, useState } from 'react';
import { Box, FilledInput, FormControl, InputAdornment, InputLabel, TextField } from '@mui/material';

export default function NomeEvalorProduto() {

    const [valores, setValores] = useState({ valor: '' });

    const handleChange = (prop) => (event) => {
        setValores({ ...valores, [prop]: event.target.value });
    };


    return (
        <Box
            sx={{
                display: 'inline-grid',
                paddingTop: "5%",
                rowGap: 3,
                direction: "column",
                alignItems: "left",
                justifyContent: "left",
                width: '100vw',
                paddingLeft:'2%'
            }}
        >
            <div>
                <TextField
                    required
                    sx={{
                        width: '35vw'
                    }}
                    id="nome-produto"
                    label="Nome"
                    variant="filled"
                />
            </div>
            <div>
                <FormControl
                    sx={{
                        m: 1,
                        width: '25vw',  
                        paddingRight: '30%'                      
                    }}
                    variant="filled"
                    size="small">
                    <InputLabel htmlFor="filled-adornment-valor">Valor</InputLabel>
                    <FilledInput
                        id="valor-produto"
                        value={valores.valor}
                        onChange={handleChange('valor')}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                </FormControl>
            </div>
        </Box>
    )
};

