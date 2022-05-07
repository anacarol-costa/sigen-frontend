import React from 'react';
import {Box, Button} from '@mui/material';

export default function ButtonProduto() {


    return (
        <Box
            sx={{
                display: 'inline-grid',
                justifyContent: "center",
                width: '100%',
                paddingTop: '7%'
            }}>
            <Button
                variant="contained"
                // onClick={handleSubmit(cadastrarUnidadeMedida)}
            >
                Enviar
            </Button>
        </Box>
    );
}
