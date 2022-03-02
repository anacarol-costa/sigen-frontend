//import { Button } from '@mui/material';
//import React, { useState } from 'react';
import { FormularioLogin } from '../components/login/FormLogin';
import GoogleLogin from 'react-google-login';
import CadastrarButton from '../components/CadastrarButton';


export default function LoginPage () {

  const responseGoogle = (response)=> {
    console.log(response);
    console.log(response.profileObj);
  }
 
  // const [formulario, setFormulario] = useState({usuario: "", senha: ""});  
 
  
  // const logarComGoogle = () => {
  //   console.log("google")
  // }



  return (
      <>
        <FormularioLogin />
        <GoogleLogin 
        clientId='112715506728-tea755e4cu7ggrjv7hvjj4lpla6ptqvq.apps.googleusercontent.com'
        buttonText='Entrar com conta Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
        <CadastrarButton />
      </>
    )   
}



