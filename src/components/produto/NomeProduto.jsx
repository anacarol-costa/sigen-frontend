import React, { useState } from 'react';
import { Box, FilledInput, FormControl, InputAdornment, InputLabel, TextField } from '@mui/material';


export default function NomeProduto(props) {


    return (
        <Box
            sx={{
                display: 'inline-grid',
                paddingTop: "5%",
                rowGap: 3,
                // direction: "column",                              
                width: '100%',
                bgcolor: 'purple',
                // alignItems: "left",
                justifyContent: "left", 
                // justifyItems: 'left'
            }}
        >
            <div>
                <TextField
                    required
                    sx={{
                        width: '100%'
                    }}
                    id="nome-produto"
                    label="Nome"
                    variant="filled"
                />
            </div>

        </Box>
    )
};

