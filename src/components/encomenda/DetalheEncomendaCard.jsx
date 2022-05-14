import {Box} from "@mui/system";
import {Checkbox, FormControlLabel} from "@mui/material";
import {useState} from "react";

export default function DetalheEncomendaCard({produtos}) {
    const [checado, setChecado] = useState(false);
    const [valorTotalProduto, setValorTotalProduto] = useState(0);

    const handleChange = (event, valor) => {
    };

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
                    <h2>{produto.unidadeMedida.descricao}</h2>
                    {
                        Object.entries(normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (
                            <Box key={opcao}>
                                <Box >{opcao}</Box>
                                <Box key={opcao}>
                                    {item.map((item) => (
                                        <Box key={item.id}>
                                            <FormControlLabel
                                                onChange={(evento) => handleChange(evento, item.valor)}
                                                control={<Checkbox />}
                                                label={item.nome}
                                            />
                                            <Box>R${item.valor}</Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            ))}


        </Box>
    )
}
