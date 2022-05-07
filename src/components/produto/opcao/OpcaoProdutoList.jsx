import React, {useState} from "react";
import {Box} from "@mui/system";
import {Button, List} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import OpcaoProduto from "./OpcaoProduto";

export default function OpcaoProdutoList() {
    const [opcoesProduto, setOpcoesProduto] = useState([<OpcaoProduto />]);

    const adicionarNovosCamposOpcaoProduto = () => {
        setOpcoesProduto([...opcoesProduto, <OpcaoProduto />])
    }

    const removerOpcaoProduto = (index) => {
        const novaListaOpcaoProduto = opcoesProduto.filter((item, i) => index !== i)

        setOpcoesProduto(novaListaOpcaoProduto)
    }

    return (
        <Box>
            <List>
                {opcoesProduto.map((opcoesProduto, index) => (
                    <Box key={index}>
                        {opcoesProduto}
                        <IconButton
                            color="secondary"
                            edge="start"
                            aria-label="delete"
                            title="Deletar"
                            onClick={() => removerOpcaoProduto(index)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
            </List>
            <Button
                variant="contained"
                onClick={adicionarNovosCamposOpcaoProduto}
            >
                nova opcao produto
            </Button>
        </Box>
    )
}
