import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosComAutorizacao from "../../../util/axios/axiosComAutorizacao";
import {mostrarMensagemErro, mostrarMensagemSucesso} from "../../../store/snackbar-reducer";
import {useForm} from "react-hook-form";
import OpcaoProdutoList from "../opcao/OpcaoProdutoList";
import {atualizarDescricaoItemOpcao} from "../../../store/item-opcao-reducer";

export default function ItemProdutoDialog(props) {
    const dispatch = useDispatch();
    const { itensOpcoesModel, itemDescricao } = useSelector(state => state.itemOpcao);

    const validacaoItemProduto = Yup.object().shape({
        itemDescricao: Yup.string()
            .required('campo obrigatório'),
    })

    const cadastrarDescricaoProduto = async () => {
        try {
            await axiosComAutorizacao.post("/itens-opcao", {itemDescricao, opcoes: itensOpcoesModel});
            dispatch(mostrarMensagemSucesso('Descrição de produto cadastrada com sucesso.'));
            props.fecharDialog();
            await props.atualizarDescricaoItemProduto();
        } catch (error) {
            console.log(error);
            dispatch(mostrarMensagemErro('Erro ao tentar cadastrar descrição de produto'));
        }
    }

    const handleAtualizarDesc = (event) => {
        dispatch(atualizarDescricaoItemOpcao(event.target.value))
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoItemProduto)
    });

    const itemDescricaoRegister = register('itemDescricao', { required: true })

    return (
        <Dialog
            open={props.mostrarDialog}
            onClose={props.fecharDialog}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Criar descrição de produto
            </DialogTitle>
            <DialogContent>
                <TextField
                    required
                    onChange={e => {
                        handleAtualizarDesc(e)
                    }}
                    variant="standard"
                    id="descricao-unidade-medida"
                    label="Descrição"
                    type="string"
                />

                <OpcaoProdutoList />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={props.fecharDialog}>
                    Cancelar
                </Button>
                <Button onClick={cadastrarDescricaoProduto} autoFocus>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
