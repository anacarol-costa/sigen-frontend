import {Box} from "@mui/system";
import React from "react";

export default function ResumoItensSelecionadosBox({produtos}) {

    const normalizarItensProduto = (lista) => {
        let result = {}

        lista.filter(itemProduto => itemProduto.itemOpcao.opcao.total).forEach((itemProduto) => {
            const opcao = itemProduto.itemOpcao.opcao;
            const itemNome = itemProduto.itemOpcao.item.descricao;

            const itemAtualDoMap = result[itemNome] ? result[itemNome] : [];
            result[itemNome] = [...itemAtualDoMap, opcao]
        })
        return result;
    }


    return (
        <Box>
            <h3>Itens selecionados</h3>
            {
                produtos.filter(produto => produto.total).map(produto => (
                    <Box key={produto.id}>
                        <h3>{produto.nome}</h3>
                        {
                            Object.entries(normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (
                                <Box key={opcao}>
                                    <h3>{opcao}</h3>
                                    <Box key={opcao}>
                                        {item.map((item) => (
                                            <Box key={item.id} sx={{ marginBottom: '10px' }}>
                                                <label>{item.nome} - R${item.total || item.valor}</label>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                ))
            }
        </Box>
    )

}
