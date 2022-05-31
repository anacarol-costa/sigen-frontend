import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import axiosSemAturozicao from "../../util/axios/axiosSemAutorizacao";

export default function ListaContato() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'whatsapp', headerName: 'WhatsApp', width: 130 },
        { field: 'horario', headerName: 'Horário', width: 130 },
        { field: 'assunto', headerName: 'Assunto', width: 180 },
        { field: 'multiline', headerName: 'Mensagem', width: 560},

        {
            field: 'actions',
            type: 'actions',
            headerName: 'Deletar contato',
            width: 120,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => delatarContato(params.id)}
                />
            ]
        }
    ]

    const delatarContato = async (id) => {
        console.log('deletar contato');
        await axiosComAutorizacao.delete(`/contatos/${id}`);
        await consultarContato();
        dispatch(mostrarMensagemSucesso('Contato excluído com sucesso.'));
        navigate('../lista-contato');
    }

    useEffect(async () => {
        await consultarContato();
    }, [])

    const consultarContato = async () => {
        const { data } = await axiosSemAturozicao.get('/contatos');
        setRows(data);
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}