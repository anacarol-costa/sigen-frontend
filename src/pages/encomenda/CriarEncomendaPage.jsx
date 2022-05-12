import {Box} from "@mui/system";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";

export default function CriarEncomendaPage() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const {data} = await axiosComAutorizacao.get(`/produtos/categoria/${id}`)
        setProdutos(data);

    }, []);

    return (
        <Box>
            <h1>Criar Encomenda</h1>

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
        </Box>
    )
}
