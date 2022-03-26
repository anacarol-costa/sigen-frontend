import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


const columns = [
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'telefone', headerName: 'Telefone', width: 130 },
    { field: 'email', headerName: 'E-mail', width: 130 },

    {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
            <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={()=> delatarUsuario(params.id)}
            />,
        ]
    }
]

const delatarUsuario = async (id) => {
    await axiosSemAutorizacao.delete(`/usuarios/${id}`);
};

export default function ListaUsuario() {
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);



    useEffect(async () =>{
        const {data} = await axiosSemAutorizacao.get('/usuarios');
        setRows(data);
    }, [])

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
