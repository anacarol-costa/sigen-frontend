import * as React from 'react';
import ptBRLocale from 'date-fns/locale/pt-BR';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";

const localeMap = {
    ptBR: ptBRLocale,
};

const mascara = {
    ptBR: '__.__.____',
}

export default function PeriodoSeletorData({carregarHorariosIndisponiveis, setDataEncomenda}) {
    const [local] = useState('ptBR');
    const [value, setValue] = useState(null);

    const handleChange = async (newValue) => {
        setValue(newValue);
        const {dia, mes, ano} = extrairData(newValue);
        const {data} = await axiosComAutorizacao.get(`periodo/compras?dia=${dia}&mes=${mes}&ano=${ano}`);

        setDataEncomenda({dia, mes, ano})
        carregarHorariosIndisponiveis(data)
    }

    function extrairData(newValue) {
        const dia = newValue.getDate();
        const mes = newValue.getMonth() + 1;
        const ano = newValue.getFullYear();
        return {dia, mes, ano};
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[local]}>
            <DatePicker
                mask={mascara}
                label="Data de entrega"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );

}
