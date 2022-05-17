import {Box} from "@mui/system";
import ButtonGroupEncomenda from "./ButtonGroupEncomenda";
import {Divider} from "@mui/material";
import encomendaUtil from "../../util/encomenda/encomendaUtil";

export default function DetalheEncomendaCard({ produtos, handleAdicionarItemQuantidade }) {

    function handleEvento(qtdSelecionada, valor, indexProduto, itemId) {
        let total = valor * qtdSelecionada;
        total = parseFloat(total.toFixed(2));
        handleAdicionarItemQuantidade({total, indexProduto, itemId})
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
                        Object.entries(encomendaUtil.normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (
                            <Box key={opcao}>
                                <h4>{opcao}</h4>
                                <Box key={opcao}>
                                    {item.map((item) => (
                                        <Box key={item.id}>
                                            <Box>{item.nome} - R${item.total || item.valor}</Box>
                                            <ButtonGroupEncomenda
                                                handleEvent={(evento) => handleEvento(evento, item.valor, indexProduto, item.id)}
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
