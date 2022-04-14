import React, { Component, useState } from 'react';
import { Box } from '@mui/system';
import { FilledInput, FormControl, InputAdornment, InputLabel } from '@mui/material';

export default function ValorProduto() {
    const [valores, setValores] = useState({ valor: '' });

    const handleChange = (prop) => (event) => {
        setValores({ ...valores, [prop]: event.target.value });
    };

    return (
        <Box
            sx={{
                display: 'inline-grid',
                paddingTop: "3%",
                rowGap: 3,
                width: '100%',
            }}
        >
            <div>
                <FormControl
                    sx={{
                        width: '15%',
                    }}
                >
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

