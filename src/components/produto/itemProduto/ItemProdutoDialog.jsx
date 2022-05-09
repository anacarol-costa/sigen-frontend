import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosComAutorizacao from "../../../util/axios/axiosComAutorizacao";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../../../store/snackbar-reducer";
import { useForm } from "react-hook-form";
import OpcaoProdutoList from "../opcao/OpcaoProdutoList";

export default function ItemProdutoDialog(props) {
    const dispatch = useDispatch();

    const validacaoItemProduto = Yup.object().shape({
        descricao: Yup.string()
            .required('campo obrigatório'),
    })

    const cadastrarDescricaoProduto = async (descricao) => {
        try {
            // await axiosComAutorizacao.post("/itens-produto", descricao);
            dispatch(mostrarMensagemSucesso('Descrição de produto cadastrada com sucesso.'));
            props.fecharDialog();
            await props.atualizarDescricaoItemProduto();
        } catch (error) {
            console.log(error);
            dispatch(mostrarMensagemErro('Erro ao tentar cadastrar descrição de produto'));
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validacaoItemProduto)
    });

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
                    variant="standard"
                    id="descricao-unidade-medida"
                    label="Descrição"
                    type="string"
                    {...register('descricao')}
                    error={errors.descricao ? true : false}
                />
                <Typography variant="inherit" color="#d32f2f">
                    {errors.descricao?.message}
                </Typography>
                <OpcaoProdutoList />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={props.fecharDialog}>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit(cadastrarDescricaoProduto)} autoFocus>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
