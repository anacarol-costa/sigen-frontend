import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ButtonProduto() {

    return (
        <Box
            sx={{
                display: 'inline-grid',
                justifyContent: "center",
                width: '100%',
            }}>
            <Button
                variant="contained"
                onClick={handleSubmit(cadastrarUnidadeMedida)}
            >
                Enviar
            </Button>
        </Box>
    );
}