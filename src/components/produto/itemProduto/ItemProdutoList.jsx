import ItemProdutoSelect from "../itemProduto/ItemProdutoSelect";
import {List} from "@mui/material";
import React, {useState} from "react";
import {Box} from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function ItemProdutoList() {

    const [itensProduto, setItensProduto] = useState([<ItemProdutoSelect />]);

    const adicionarNovosCamposProduto = () => {
        setItensProduto([...itensProduto, <ItemProdutoSelect/>])
    }

    const removerItemProduto = (index) => {
        const novaListaItensProduto = itensProduto.filter((item, i) => index !== i)

        setItensProduto(novaListaItensProduto)
    }

    return (
        <Box>
            <List>
                {itensProduto.map((itemProduto, index) => (
                    <Box key={index} sx={{display: 'flex'}}>
                        {itemProduto}
                        <IconButton
                            onClick={adicionarNovosCamposProduto}
                            edge="start"
                            aria-label="add"
                            title="Adicionar"
                        >
                            <AddIcon />
                        </IconButton>
                        {itensProduto.length > 1 &&
                            <IconButton
                                color="secondary"
                                edge="start"
                                aria-label="delete"
                                title="Deletar"
                                onClick={() => removerItemProduto(index)}
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
