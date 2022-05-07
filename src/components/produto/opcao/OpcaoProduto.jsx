import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import React from "react";

export default function OpcaoProduto() {


    return(
        <Box sx={{display: 'flex', rowGap: '10'}}>
            <TextField
                sx={{width: '80%'}}
                required
                variant="filled"
                id="opcao-do-produto"
                label="Opção"
                type="text"
            />
            <TextField
                sx={{width: '80%'}}
                required
                variant="filled"
                id="valor-da-opcao"
                label="Valor"
                type="text"
            />
        </Box>
    )
}
