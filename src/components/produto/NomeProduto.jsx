import React, { useState } from 'react';
import { Box, FilledInput, FormControl, InputAdornment, InputLabel, TextField } from '@mui/material';


export default function NomeProduto(props) {


    return (
        <Box
            sx={{
                display: 'inline-flex',
                paddingTop: "5%",
                rowGap: 3,  
            }}
        >
            <div>
                <TextField
                    required
                    sx={{
                        width: '140%'
                    }}
                    id="nome-produto"
                    label="Nome"
                    variant="filled"
                />
            </div>

        </Box>
    )
};
