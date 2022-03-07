import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormularioLogin } from '../components/login/FormLogin';
import GoogleLogin from 'react-google-login';
import CadastrarButton from '../components/CadastrarButton';
import sessionUtil, { SessionUtil } from '../util/sessionUtil';


export default function LoginPage() {

  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT_ID;


  const responseOkGoogle = (response) => {
    const jwtGoogle = response.tokenObj.id_token;

    sessionUtil.setPropriedadeCookie(SessionUtil.TKN, jwtGoogle, { path: '/' });

    navigate('/');
  }

  const responseErroGoogle = (response) => {
    console.log(response);
  }


  return (
    <>
      <FormularioLogin />
      <GoogleLogin
        clientId={clientId}
        buttonText='Entrar com conta Google'
        onSuccess={responseOkGoogle}
        onFailure={responseErroGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <CadastrarButton />
    </>
  )
}



