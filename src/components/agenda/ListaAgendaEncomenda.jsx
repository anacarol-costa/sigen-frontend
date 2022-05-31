import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import axiosSemAturozicao from "../../util/axios/axiosSemAutorizacao";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListaAgendaEncomenda() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'id', headerName: 'N° pedido', width: 80 },
        { field: 'usuario', headerName: 'Cliente', width: 80, valueFormatter: ({ value }) => value.nome },
        { field: 'produtos', headerName: 'Produtos', width: 180, valueFormatter: ({ value }) => value.map(produto => produto.nome) },
        { field: 'ItensProduto', headerName: 'Opção', width: 200},
        // { field: 'ItensProduto', headerName: 'Opção', width: 200, valueFormatter: ({ value }) => value.map(itemProduto => itemProduto.itemOpcao.item.opcao.nome)},
        { field: 'dia', headerName: 'Dia', width: 70 },
        { field: 'mes', headerName: 'Mês', width: 70 },
        { field: 'hora', headerName: 'horário', width: 70 },



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
        await consultarCompra();
        dispatch(mostrarMensagemSucesso('Encomenda cancelada com sucesso.'));
        navigate('/private/administracao/agenda-encomendas');
    }

    useEffect(async () => {
        await consultarCompra();
    }, [])

    const consultarCompra = async () => {
        const { data } = await axiosSemAturozicao.get(`/compras`);
        setRows(data);
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}
