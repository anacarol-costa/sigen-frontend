import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import DetalheEncomendaCard from "../../components/encomenda/DetalheEncomendaCard";
import {Button, Divider} from "@mui/material";
import sessionUtil from "../../util/sessionUtil";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../../store/snackbar-reducer";
import {useDispatch} from "react-redux";
import ButtonGroupEncomenda from "../../components/encomenda/ButtonGroupEncomenda";

export default function CriarEncomendaPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [produtos, setProdutos] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [totalEncomenda, setTotalEncomenda] = useState(0);

    useEffect(async () => {
        const { data: produtos } = await axiosComAutorizacao.get(`/produtos/categoria/${id}`)
        const { data: enderecoUsuario } = await axiosComAutorizacao.get(`/usuarios/${sessionUtil.getIdUsuario()}/endereco`)

        setProdutos(produtos);
        setEndereco(enderecoUsuario);
    }, []);

    const handleAdicionarItemQuantidade = ({total, indexProduto, itemId}) => {
        const produtosCopia = [...produtos];
        const index = produtosCopia[indexProduto].itensProduto.findIndex(itemProduto => itemProduto.itemOpcao.opcao.id === itemId)
        produtosCopia[indexProduto].itensProduto[index].itemOpcao.opcao.total = total; // Obter index of por id de opcao ou item.
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
            return acumulador + valorAtual;
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

    const encomendar = async () => {
        const payload = montarPayload();
        try {
            await axiosComAutorizacao.post('/compras', payload);
            dispatch(mostrarMensagemSucesso('Encomenda feita.'));
        } catch (error) {
            console.error('Erro ao tentar encomendar produto.', error);
            dispatch(mostrarMensagemErro('Erro ao tentar encomendar produto.'));
        }
    }

    function montarPayload() {
        const produtosSelecionados = produtos.filter(produto => produto.total).map(produto => produto.id);

        return  {
            produtosId: produtosSelecionados,
            valorCompra: totalEncomenda,
            usuarioId: sessionUtil.getIdUsuario(),
            enderecoCompraId: endereco.id
        }
    }

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
            <h1>Criar Encomenda</h1>
            <Box sx={{display: 'flex'}}>
                {
                    produtos.length > 0 &&
                    <DetalheEncomendaCard
                        produtos={produtos}
                        handleAdicionarItemQuantidade={handleAdicionarItemQuantidade}
                    />
                }

                <Box sx={{
                    display: 'flex',
                }}>
                    <Box
                        sx={{
                            background: 'white',
                            margin: '5px',
                            width: '100%',
                            maxWidth: 350,
                        }}
                        elevation={3}
                    >
                        <Box>
                            <h3>Total R$ {totalEncomenda}</h3>
                            <br/>
                            <Divider />

                            <h3>Endereço de entrega</h3>
                            <Box>
                                <Box>{endereco.bairro}</Box>
                                <Box>
                                    <Box>{endereco.cep}</Box>
                                    <Box>{endereco.complemento}</Box>
                                </Box>
                            </Box>
                            <br/>
                            <Divider />


                            <h3>Itens selecionados</h3>
                            <Box>
                                {
                                    produtos.filter(produto => produto.total).map(produto => (
                                        <Box key={produto.id}>
                                            <h3>{produto.nome}</h3>
                                            {
                                                produto.itensProduto.filter(item => item.itemOpcao.opcao.total).map(itemProduto => (
                                                    <Box key={itemProduto.id}>
                                                        <h4>{itemProduto.itemOpcao.item.descricao}</h4>
                                                        <Box>{itemProduto.itemOpcao.opcao.nome} - {itemProduto.itemOpcao.opcao.valor}</Box>
                                                    </Box>
                                                ))
                                            }
                                            {/*{*/}
                                            {/*    Object.entries(normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (*/}
                                            {/*        <Box key={opcao}>*/}
                                            {/*            <h3>{opcao}</h3>*/}
                                            {/*            <Box key={opcao}>*/}
                                            {/*                {item.map((item) => (*/}
                                            {/*                    <Box key={item.id}>*/}
                                            {/*                        <label>{item.nome}</label>*/}

                                            {/*                        <Box>R${item.total || item.valor}</Box>*/}
                                            {/*                    </Box>*/}
                                            {/*                ))}*/}
                                            {/*            </Box>*/}
                                            {/*        </Box>*/}
                                            {/*    ))*/}
                                            {/*}*/}
                                        </Box>
                                    ))
                                }
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>

            <Button
                variant="contained"
                onClick={encomendar}
            >
                Encomendar
            </Button>
        </Box>
    )
}
