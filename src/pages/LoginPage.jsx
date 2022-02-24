import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FormularioLogin } from '../components/login/FormLogin';


export default function LoginPage () {
 
  const [formulario, setFormulario] = useState({usuario: "", senha: ""});  
 
  
  const logarComGoogle = () => {
    console.log("google")
  }



  return (
      <>
        <FormularioLogin />
        <Button variant="contained" onClick={logarComGoogle}>Entre com Google</Button>
      </>
    )   
}



