import {Box} from "@mui/system";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import DetalheEncomendaCard from "../../components/encomenda/DetalheEncomendaCard";

export default function CriarEncomendaPage() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const { data } = await axiosComAutorizacao.get(`/produtos/categoria/${id}`)
        setProdutos(data);
    }, []);

    const handleAdicionarItemQuantidade = ({total, indexProduto, indexItem}) => {
        const produtosCopia = [...produtos];
        produtosCopia[indexProduto].itensProduto[indexItem].itemOpcao.opcao.total = total;
        setProdutos(produtosCopia)
    }

    return (
        <Box>
            <h1>Criar Encomenda</h1>

            {produtos.length > 0 &&
                <DetalheEncomendaCard
                    produtos={produtos}
                    handleAdicionarItemQuantidade={handleAdicionarItemQuantidade}
                />
            }
        </Box>
    )
}
