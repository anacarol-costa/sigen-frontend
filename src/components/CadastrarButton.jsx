import { Box, Button } from '@mui/material'
import React, { Component } from 'react'

export function CadastrarButton(props) {
    

    return (
      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <Button variant='contained' onSubmit={FormAdm}>Cadastre-se</Button>
        </Box>
      
      
    )
  
}

export default CadastrarButton