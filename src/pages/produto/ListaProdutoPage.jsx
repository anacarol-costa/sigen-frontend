import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import { Button } from "@mui/material";

export default function ListaProduto() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'valorBase', headerName: 'Valor', width: 130 },
        { field: 'categoria.nome', headerName: 'Categoria', width: 130 },
        { field: 'unidadeMedida.abreviacao', headerName: 'Unidade de medida', width: 140 },

        {
            field: 'actions',
            type: 'actions',
            headerName: 'Deletar produto',
            width: 120,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => delatarProduto(params.id)}
                />,
            ]
        }
    ]

    const delatarProduto = async (id) => {
        console.log('deletar produto');
        await axiosComAutorizacao.delete(`/produtos/${id}`);
        await consultarProduto();
        dispatch(mostrarMensagemSucesso('Produto excluído com sucesso.'));
        navigate('/private/administracao/produto/lista-produto');
    };


    useEffect(async () => {
        await consultarProduto();
    }, [])

    const consultarProduto = async () => {
        const { data } = await axiosSemAutorizacao.get('/produtos');
        setRows(data);
    }

    const novoProduto = () => {
        navigate('/private/administracao/novo-produto')
    }

    return (               
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
            <Button variant='contained' onClick={novoProduto}>Novo Produto</Button>
        </div>
    )
}