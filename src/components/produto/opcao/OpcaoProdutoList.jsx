import React, {useState} from "react";
import {Box} from "@mui/system";
import {List} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import OpcaoProduto from "./OpcaoProduto";

export default function OpcaoProdutoList() {
    const [opcoesProduto, setOpcoesProduto] = useState([<OpcaoProduto indice={0} />]);

    const adicionarNovosCamposOpcaoProduto = (index) => {
        const proximoIndice = index + 1;
        setOpcoesProduto([...opcoesProduto, <OpcaoProduto indice={proximoIndice} />])
    }

    const removerOpcaoProduto = (index) => {
        const novaListaOpcaoProduto = opcoesProduto.filter((item, i) => index !== i)

        setOpcoesProduto(novaListaOpcaoProduto)
    }

    return (
        <Box>
            <List>
                {opcoesProduto.map((opcaoProduto, index) => (
                    <Box key={index} sx={{display: 'flex'}}>
                        { opcaoProduto }
                        <IconButton
                            onClick={() => adicionarNovosCamposOpcaoProduto(index)}
                            edge="start"
                            aria-label="add"
                            title="Adicionar"
                        >
                            <AddIcon />
                        </IconButton>

                        {opcoesProduto.length > 1 &&
                            <IconButton
                                color="secondary"
                                edge="start"
                                aria-label="delete"
                                title="Deletar"
                                onClick={() => removerOpcaoProduto(index)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    </Box>
                ))}
            </List>
        </Box>
    )
}
