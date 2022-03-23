import React, { Component } from 'react';
import MuiAlert from '@mui/material/Alert';
import { Snackbar, Stack } from '@mui/material';


const Alerta = React.forwardRef(function Alerta(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CadastroAlertaSucesso() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Stack
      spacing={2}
      sx={{
        display: 'inline-grid',
        rowGap: 1,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100vw',
        pt: 30
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alerta
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Esta é uma mensagem de sucesso!
        </Alerta>
      </Snackbar>
      <Alerta
        severity="success"
      >
        Cadastro realizado com sucesso
      </Alerta>
    </Stack>
  );

}
