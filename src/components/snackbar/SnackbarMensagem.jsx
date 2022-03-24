import React from 'react';
import {Button, Snackbar, SnackbarContent, Stack} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {esconderMensagem} from "../../store/snackbar-reducer";

export default function SnackbarMensagem() {
  const {visivel, mensagem, textoBotao, color} = useSelector(state => state.snackbar);
  const dispatch = useDispatch();

  const fecharMensagem = () => {
      dispatch(esconderMensagem())
  }

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
        open={visivel}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
      >
      <SnackbarContent
          style={{ backgroundColor: `${color}` }}
          message={<span id="client-snackbar">{mensagem}</span>}
          action={
              <Button color="inherit" size="small" onClick={fecharMensagem}>
                  { textoBotao }
              </Button>
          }
      />
      </Snackbar>
    </Stack>
  );

}
