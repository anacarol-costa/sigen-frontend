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
                {"Cadstrar endereço"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Verificamos que você não tem infomação de endereço, para realizar uma encomenda cadastre
                   um endereço primeira.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={fecharDialog}>Cancelar</Button>
                <Button onClick={seguirParaEndereco} autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
