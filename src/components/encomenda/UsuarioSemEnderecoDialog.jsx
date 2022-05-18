import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function UsuarioSemEnderecoDialog({open, fecharDialog, seguirParaEndereco}) {


    return (
        <Dialog
            open={open}
            onClose={fecharDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Cadastrar endereço"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" align="center">
                   Identificamos que seu endereço não está cadastrado. 
                   Para dar prosseguimento a encomenda, cadastre seu endereço.                   
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={fecharDialog}>Cancelar</Button>
                <Button onClick={seguirParaEndereco} autoFocus>
                    Cadastrar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
