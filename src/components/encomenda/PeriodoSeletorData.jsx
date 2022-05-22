import * as React from 'react';
import ptBRLocale from 'date-fns/locale/pt-BR';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const localeMap = {
    ptBR: ptBRLocale,
};

const mascara = {
    ptBR: '__.__.____',
}

export default function PeriodoSeletorData() {
    const [local] = useState('ptBR');
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[local]}>
            <DatePicker
                mask={mascara}
                label="Data de entrega"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );

}