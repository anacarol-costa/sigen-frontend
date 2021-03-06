import React from 'react';
import { useNavigate } from "react-router-dom";
import { FormularioLogin } from '../components/login/FormLogin';
import GoogleLogin from 'react-google-login';
import sessionUtil, { SessionUtil } from '../util/sessionUtil';
import { Box, Grid } from "@mui/material";


export default function LoginPage() {

  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT_ID;


  const responseOkGoogle = (response) => {
    try {
      const jwtGoogle = response.tokenObj.id_token;

      sessionUtil.setPropriedadeCookie(SessionUtil.TKN, jwtGoogle, { path: '/' });

      if (!sessionUtil.isAdmin()) {
        navigate('/private/home');
      } else {
        navigate('/private/administracao/home')
      }

    } catch (error) {
      console.error(error);
    }

  }

  const responseErroGoogle = (response) => {
    console.log(response);
  }


  return (
    <Grid
      container spacing={2}
      sx={{
        display: 'inline-grid',
        rowGap: 1,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100vw',
        pt: 1
      }}>
      <Box>
        <FormularioLogin />
      </Box>
      <Box sx={{
        display: 'inline-grid',
        justifyContent: "center",
        width: '100%',
      }}>
        <GoogleLogin
          clientId={clientId}
          buttonText='Entrar com conta Google'
          onSuccess={responseOkGoogle}
          onFailure={responseErroGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </Box>
    </Grid>
  )
}



