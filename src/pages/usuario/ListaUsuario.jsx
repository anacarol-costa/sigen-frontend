import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axiosSemAutorizacao from "../../util/axios/axiosSemAutorizacao";
import {useEffect, useState} from "react";

function getFullName(params) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'telefone', headerName: 'Telefone', width: 130 },
    { field: 'email', headerName: 'E-mail', width: 130 },

];



export default function ListaUsuario() {
    const [rows, setRows] = useState([]);
    useEffect(async () =>{
        const usuarios = await obterUsuarios();
        setRows(usuarios);
    }, [])

    const obterUsuarios = async () => {
        const {data} = await axiosSemAutorizacao.get('/usuarios');
        return data;
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
