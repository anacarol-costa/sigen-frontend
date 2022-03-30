import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mostrarMensagemSucesso } from '../../store/snackbar-reducer';
import { useDispatch } from 'react-redux';


export default function ListaUsuario() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([]);
    const columns = [
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'telefone', headerName: 'Telefone', width: 130 },
        { field: 'email', headerName: 'E-mail', width: 200 },
               
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Deletar usuário',
            width: 120,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => delatarUsuario(params.id)}
                />,
            ]
        }
    ]

    const delatarUsuario = async (id) => {
        console.log('deletar usuario');
        await axiosSemAutorizacao.delete(`/usuarios/${id}`);
        await consultarUsuario();
        dispatch(mostrarMensagemSucesso('Usuário excluído com sucesso.'));
        navigate('/private/administracao/usuarios');
    };


    useEffect(async () => {
        await consultarUsuario();
    }, [])

    const consultarUsuario = async () => {
        const { data } = await axiosSemAutorizacao.get('/usuarios');
        setRows(data);
    }

    const novoUsuario = () => {
        navigate('/private/administracao/novo-usuario')
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
            <Button variant='contained' onClick={novoUsuario}>Novo Usuario</Button>
        </div>
    );
}
