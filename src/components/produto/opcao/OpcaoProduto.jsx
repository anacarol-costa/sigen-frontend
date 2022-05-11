import {Box} from "@mui/system";
import {TextField} from "@mui/material";
import React from "react";
import {useDispatch} from "react-redux";
import {atualizarItemOpcaoModel} from "../../../store/item-opcao-reducer";

export default function OpcaoProduto({indice}) {
    const dispatch = useDispatch();

    const handleChange = (nomeCampo, evento) => {
        dispatch(atualizarItemOpcaoModel({ [nomeCampo]: evento.target.value, indice }))
    }

    return(
        <Box sx={{display: 'flex', rowGap: '10'}}>
            <TextField
                sx={{width: '80%'}}
                required
                variant="standard"
                id="opcao-do-produto"
                label="Opção"
                type="text"
                onChange={e => handleChange('nome', e)}
            />
            <TextField
                sx={{width: '80%'}}
                required
                variant="standard"
                id="valor-da-opcao"
                label="Valor"
                type="text"
                onChange={e => handleChange('valor', e)}
            />
        </Box>
    )
}
