import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import DetalheEncomendaCard from "../../components/encomenda/DetalheEncomendaCard";
import {Button, Divider} from "@mui/material";
import sessionUtil from "../../util/sessionUtil";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../../store/snackbar-reducer";
import {useDispatch} from "react-redux";
import UsuarioSemEnderecoDialog from "../../components/encomenda/UsuarioSemEnderecoDialog";
import ResumoItensSelecionadosBox from "../../components/encomenda/ResumoItensSelecionadosBox";
import ResumoEnderecoBox from "../../components/encomenda/ResumoEnderecoBox";

export default function CriarEncomendaPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);
    const [endereco, setEndereco] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [totalEncomenda, setTotalEncomenda] = useState(0);

    useEffect(async () => {
        const { data: produtosRecuperados } = await axiosComAutorizacao.get(`/produtos/categoria/${id}`)
        try {
            const { data: enderecoUsuario } = await axiosComAutorizacao.get(`/usuarios/${sessionUtil.getIdUsuario()}/endereco`)
            setEndereco(enderecoUsuario);
        } catch (_) {
            setDialogOpen(true);
        }


        setProdutos(produtosRecuperados);

    }, []);

    const handleAdicionarItemQuantidade = ({total, indexProduto, itemId}) => {
        const produtosCopia = [...produtos];
        const index = obterIndiceOpcaoSelecionada(produtosCopia, indexProduto, itemId)
        produtosCopia[indexProduto].itensProduto[index].itemOpcao.opcao.total = total;
        setProdutos(produtosCopia)

        atualizarTotalProdutoSelecionado(produtosCopia[indexProduto], indexProduto)
        atualizarTotalEncomenda()
    }

    function obterIndiceOpcaoSelecionada(produtosCopia, indexProduto, itemId) {
        return produtosCopia[indexProduto].itensProduto.findIndex(itemProduto => itemProduto.itemOpcao.opcao.id === itemId);
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
        let total = itensSeleciondados.reduce((acumulador, valorAtual) => {
            return acumulador + valorAtual;
        }, produtoSeleciondo.valorBase);

        total = parseFloat(total)
        return total.toFixed(2);

    }

    function atualizarTotalEncomenda() {
        let valorTotalEncomenda = produtos.filter(produto => produto.total)
            .map(produto => produto.total)
            .reduce((acumulador, valorAtual) => {
            const valorAtualNumerico = +valorAtual;

            return acumulador + valorAtualNumerico
        }, 0);

        setTotalEncomenda(valorTotalEncomenda);
    }

    const encomendar = async () => {
        const payload = montarPayload();
        try {
            const { data } = await axiosComAutorizacao.post('/compras', payload);
            dispatch(mostrarMensagemSucesso('Encomenda feita.'));
            navigate(`../encomenda/${data.id}/resumo`)
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

    const fecharDialog = () => {
        setDialogOpen(false);
        navigate('../encomenda')
    }

    const seguirParaEndereco = () => {
        setDialogOpen(false);
        navigate('../endereco')
    }

    return (
        <Box>
            <UsuarioSemEnderecoDialog
                open={dialogOpen}
                fecharDialog={fecharDialog}
                seguirParaEndereco={seguirParaEndereco}
            />
            { endereco &&
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

                                    <ResumoEnderecoBox endereco={endereco} />
                                    <br/>
                                    <Divider />

                                    <ResumoItensSelecionadosBox produtos={produtos}/>

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
            }
        </Box>
    )
}
