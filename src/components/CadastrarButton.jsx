import { Box, Button } from '@mui/material';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormAdm from '../pages/FormAdm';


export function CadastrarButton(props) {
    
  const formAdm = (event) => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path='formAdm' element={<FormAdm />} />
            </Routes>
        </BrowserRouter>
    )
}

    return (
      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <Button variant='contained'onClick={formAdm}>Cadastre-se</Button>
        </Box>
      
      
    )
  
}

export default CadastrarButton