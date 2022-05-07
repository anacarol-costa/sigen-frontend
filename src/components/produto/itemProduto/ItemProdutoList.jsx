import ItensProduto from "../itemProduto/ItensProduto";
import {Button, List} from "@mui/material";
import React, {useState} from "react";
import {Box} from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function ItemProdutoList() {

    const [itensProduto, setItensProduto] = useState([<ItensProduto />]);

    const adicionarNovosCamposProduto = () => {
        setItensProduto([...itensProduto, <ItensProduto/>])
    }

    const removerItemProduto = (index) => {
        const novaListaItensProduto = itensProduto.filter((item, i) => index !== i)

        setItensProduto(novaListaItensProduto)
    }

    return (
        <Box>
            <Button
                variant="contained"
                onClick={adicionarNovosCamposProduto}
            >
               Novo itens produto
            </Button>
            <List>
                {itensProduto.map((itemProduto, index) => (
                    <Box key={index}>
                        {itemProduto}
                        <IconButton
                            color="secondary"
                            edge="start"
                            aria-label="delete"
                            title="Deletar"
                            onClick={() => removerItemProduto(index)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
            </List>

        </Box>
    )
}
