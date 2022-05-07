import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import React from "react";

export default function OpcaoProduto() {


    return(
        <Box>
            <TextField
                sx={{width: '140%'}}
                required
                variant="filled"
                id="opcao-do-produto"
                label="Opção"
                type="text"
            />
            <TextField
                sx={{width: '140%'}}
                required
                variant="filled"
                id="valor-da-opcao"
                label="Valor"
                type="text"
            />
        </Box>
    )
}
