export const SNACKBAR_ACTIONS = {
    MOSTRAR_MSG_SUCESSO: 'MOSTRAR_MSG_SUCESSO',
    MOSTRAR_MSG_ERROR: 'MOSTRAR_MSG_ERROR',
}

export const mostrarMsgSucesso = (msg) => ({
    type: SNACKBAR_ACTIONS.MOSTRAR_MSG_SUCESSO,
    payload: {
        msg,
        botao: 'Ok',
        color: 'success'
    }
})

export const mostrarMsgError = (msg) => ({
    type: SNACKBAR_ACTIONS.MOSTRAR_MSG_SUCESSO,
    payload: {
        msg,
        botao: 'Ok',
        color: 'error'
    }
})
