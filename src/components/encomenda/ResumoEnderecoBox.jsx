import {Box} from "@mui/system";
import React from "react";

export default function ResumoEnderecoBox({endereco}) {

    return (
        <Box>
            <h3>Endereço de entrega</h3>
            <Box>{endereco.bairro}</Box>
            <Box>
                <Box>{endereco.cep}</Box>
                <Box>{endereco.complemento}</Box>
            </Box>
        </Box>
    )
}
