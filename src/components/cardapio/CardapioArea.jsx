import { Box } from "@mui/system";
import { useState } from "react";
import { DropzoneArea } from 'material-ui-dropzone';
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { useDispatch } from "react-redux";
import { mostrarMensagemErro, mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CardapioArea(props) {
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (files) => {
        setFiles(true);
        console.log(files);
    }

    const validacaoCardapio = Yup.object().shape({
        pdf: Yup.string()
            .required('campo obrigatório')
    })

    const {
        register,
        handleSubmit,
        formState: { erros }
    } = useForm({
        resolver: yupResolver(validacaoCardapio)
    })

    const armazenarCardapio = async () => {
        try {
            const { files } = await axiosComAutorizacao.post("/cardapios")
            dispatch(mostrarMensagemSucesso('Cardápio salvo com sucesso.'))
            console.log(files);
        } catch (error) {
            console.log(error);
            dispatch(mostrarMensagemErro('Erro ao tentar salvar cardápio!'))
        }
    }

    return (
        <Box>
            <h1>Cardápio</h1>
            <p>O cardápio possibilitará que o cliente conheça e consulte seus produtos e preços.</p>
            <p>Arraste e solte um arquivo abaixo ou clique.</p>
            <DropzoneArea
                maxFileSize={5000000}
                onClick={handleSubmit(armazenarCardapio)}
            />
        </Box>
    )

}