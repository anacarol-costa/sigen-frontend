import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ItensProduto from './ItensProduto';


export default function FabAddItemProduto() {
    function adicionaItensProduto() {
        debugger;
        return <div><ItensProduto /></div>
    }

    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1 },

            }}
        >
            <Fab
                size="small"
                color="secondary"
                aria-label="add"
            >
                {Array.from({ lenght: 10 }).map((_, index) => (
                    <adicionaItensProduto key={index} />
                ))}
                <AddIcon />
            </Fab>
        </Box>
    );
}