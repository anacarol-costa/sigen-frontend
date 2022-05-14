import {Box} from "@mui/system";
import {useEffect, useState} from "react";

function normalizarItensProduto(lista) {
    let result = {}

    lista.forEach((item) => {
        item.itensProduto.forEach((itemProduto) => {
            const opcao = itemProduto.itemOpcao.opcao;
            const itemNome = itemProduto.itemOpcao.item.descricao;

            const itemAtualDoMap = result[itemNome] ? result[itemNome] : [];
            result[itemNome] = [...itemAtualDoMap, opcao]
        })
    });

    return result;
}

export default function DetalheEncomendaCard({produtos}) {

    const [opcoes, setOpcoes] = useState([]);
    useEffect(() => {
        setOpcoes(normalizarItensProduto(produtos))
    }, [])


    return (
        <Box sx={{
            display: 'flex',
            paddingLeft: '20%',
        }}>
            {produtos.map(produto => (
                <Box
                    key={produto.id}
                    sx={{
                        background: 'white',
                        margin: '5px',
                        width: '100%',
                        maxWidth: 350,
                    }}
                    elevation={3}
                >
                    <h2>{produto.nome}</h2>
                    {produto.itensProduto.map(itemproduto =>(
                        <Box key={itemproduto.id}>
                            <Box>{itemproduto.itemOpcao.item.descricao}</Box>
                            <Box>{itemproduto.itemOpcao.opcao.nome}</Box> - <div>{itemproduto.itemOpcao.opcao.valor}</div>
                        </Box>
                    ))}
                    <h2>{produto.unidadeMedida.descricao}</h2>
                </Box>
            ))}
        </Box>
    )
}
