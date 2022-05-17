import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import DetalheEncomendaCard from "../../components/encomenda/DetalheEncomendaCard";
import {Button} from "@mui/material";

export default function CriarEncomendaPage() {
    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [totalEncomenda, setTotalEncomenda] = useState(0);

    useEffect(async () => {
        const { data } = await axiosComAutorizacao.get(`/produtos/categoria/${id}`)
        setProdutos(data);
    }, []);

    const handleAdicionarItemQuantidade = ({total, indexProduto, indexItem}) => {
        const produtosCopia = [...produtos];
        produtosCopia[indexProduto].itensProduto[indexItem].itemOpcao.opcao.total = total;
        setProdutos(produtosCopia)

        atualizarTotalProdutoSelecionado(produtosCopia[indexProduto], indexProduto)
        atualizarTotalEncomenda()
    }

    const atualizarTotalProdutoSelecionado = (produtoSeleciondo, indexProdutoSelecionado) => {
        const itensSeleciondados = obterOpcoesSeleciondos(produtoSeleciondo)

        atualizarValorTotalDeProduto(indexProdutoSelecionado, itensSeleciondados, produtoSeleciondo);

    }

    function obterOpcoesSeleciondos(produtoSeleciondo) {
        return produtoSeleciondo.itensProduto
            .filter(itemProduto => itemProduto.itemOpcao.opcao.total)
            .map(itemProduto => itemProduto.itemOpcao.opcao.total);
    }

    function atualizarValorTotalDeProduto(indexProdutoSelecionado, itensSeleciondados, produtoSeleciondo) {
        const produtosCopia = [...produtos];

        produtosCopia[indexProdutoSelecionado].total = calcularTotalItemSelecionado(itensSeleciondados, produtoSeleciondo);
        setProdutos(produtosCopia);
    }

    function calcularTotalItemSelecionado(itensSeleciondados, produtoSeleciondo) {
        return itensSeleciondados.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        }, produtoSeleciondo.valorBase);
    }

    function atualizarTotalEncomenda() {
        const valorTotalEncomenda = produtos.filter(produto => produto.total)
            .map(produto => produto.total)
            .reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual
        }, 0);

        setTotalEncomenda(valorTotalEncomenda);
    }

    const encomendar = () => {
        console.log('aqui')
    }

    return (
        <Box>
            <h1>Criar Encomenda</h1>
            <label>Total R$ {totalEncomenda}</label>
            {produtos.length > 0 &&
                <DetalheEncomendaCard
                    produtos={produtos}
                    handleAdicionarItemQuantidade={handleAdicionarItemQuantidade}
                />
            }

            <Button
                variant="contained"
                onClick={encomendar}
            >
                Encomendar
            </Button>
        </Box>
    )
}
