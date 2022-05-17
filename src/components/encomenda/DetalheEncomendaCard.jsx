import {Box} from "@mui/system";
import ButtonGroupEncomenda from "./ButtonGroupEncomenda";
import {Divider} from "@mui/material";

export default function DetalheEncomendaCard({ produtos, handleAdicionarItemQuantidade }) {

    const normalizarItensProduto = (lista) => {
        let result = {}

        lista.forEach((itemProduto) => {
            const opcao = itemProduto.itemOpcao.opcao;
            const itemNome = itemProduto.itemOpcao.item.descricao;

            const itemAtualDoMap = result[itemNome] ? result[itemNome] : [];
            result[itemNome] = [...itemAtualDoMap, opcao]
        })
        return result;
    }


    function handleEvento(qtdSelecionada, valor, indexProduto, indexItem) {
        const total = valor * qtdSelecionada;
        handleAdicionarItemQuantidade({total, indexProduto, indexItem})
    }


    return (
        <Box sx={{
            display: 'flex',
            paddingLeft: '20%',
        }}>
            {produtos.map((produto, indexProduto) => (
                <Box
                    key={produto.id}
                    sx={{
                        background: 'white',
                        margin: '5px',
                        width: '25vw',
                    }}
                    elevation={3}
                >
                    <h2>{produto.nome}</h2>
                    <h3>R${produto.valorBase} {produto.unidadeMedida.abreviacao}</h3>
                    {
                        Object.entries(normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (
                            <Box key={opcao}>
                                <h4>{opcao}</h4>
                                <Box key={opcao}>
                                    {item.map((item, indexItem) => (
                                        <Box key={item.id}>
                                            <Box>{item.nome} - R${item.total || item.valor}</Box>
                                            <ButtonGroupEncomenda
                                                handleEvent={(evento) => handleEvento(evento, item.valor, indexProduto, indexItem)}
                                            />
                                            <br/>
                                        </Box>
                                    ))}
                                <Divider />
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            ))}
        </Box>
    )
}
