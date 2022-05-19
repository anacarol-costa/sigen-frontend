import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import axiosSemAturozicao from "../../util/axios/axiosSemAutorizacao";

export default function ListaMinhasEncomendas() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'id', headerName: 'Número do pedido', width: 130 },
        { field: 'produtosId.produto.id.nome', headerName: 'Produto', width: 200 },      
        { field: 'valorCompra', headerName: 'Total (R$)', width: 200 },      

        {
            field: 'actions',
            type: 'actions',
            headerName: 'Cancelar encomenda',
            width: 160,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => delatarEncomenda(params.id)}
                />,
            ]
        }
    ]

    const delatarEncomenda = async (id) => {
        console.log('deletar encomenda');
        await axiosComAutorizacao.delete(`/compras/${id}`);
        await consultarEncomenda();
        dispatch(mostrarMensagemSucesso('Encomenda cancelada com sucesso.'));
        navigate(`private/lista-encomenda/${id}`);
    }

    useEffect(async () => {
        await consultarEncomenda();
    }, [])

    const consultarEncomenda = async () => {
        const { data } = await axiosSemAturozicao.get(`/compras/`);
        setRows(data);
        console.log('encomenda', data);
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}