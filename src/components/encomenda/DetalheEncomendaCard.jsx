import {Box} from "@mui/system";


export default function DetalheEncomendaCard({produtos}) {

    const normalizarItensProduto = (lista) => {
        let result = {}

        lista.forEach((itemProduto) => {
            const opcao = itemProduto.itemOpcao.opcao;
            const itemNome = itemProduto.itemOpcao.item.descricao;

            const itemAtualDoMap = result[itemNome] ? result[itemNome] : [];
            result[itemNome] = [...itemAtualDoMap, opcao]
        })
        console.log('result', result);
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
                                    {item.map(item => (
                                        <Box key={item.id}>
                                            <Box>{item.nome}</Box>
                                            <Box>{item.valor}</Box>
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
