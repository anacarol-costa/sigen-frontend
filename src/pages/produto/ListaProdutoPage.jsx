import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { mostrarMensagemSucesso } from "../../store/snackbar-reducer";
import { Button } from "@mui/material";

export default function ListaProdutoPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'nome', headerName: 'Nome', width: 180 },        
        { field: 'itensProduto', headerName: 'Opção', width: 200, valueFormatter: ({ value }) => value.map(produto => produto.itemOpcao.opcao.nome) },
        { field: 'categoria', headerName: 'Categoria', width: 130, valueFormatter: ({ value }) => value.nome },
        { field: 'unidadeMedida', headerName: 'Unidade de medida', width: 150, valueFormatter: ({ value }) => value.abreviacao },
        { field: 'valorBase', headerName: 'Valor (R$)', width: 130 },        

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
        const { data } = await axiosComAutorizacao.get('/produtos');
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
