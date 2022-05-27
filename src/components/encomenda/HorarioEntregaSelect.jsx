import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import {React, useEffect, useState} from "react";
import {Box} from "@mui/system";

export default function HorarioEntregaSelect(props) {

    const [horarios, setHorarios] = useState([]);
    const [horario, setHorario] = useState('');


    useEffect(() => {
        definirHorariosDoSelect();
    }, [props.horariosIndiponiveis])

    const selecionarHorario = (event) => {
        const horarioSelecionado = event.target.value
        setHorario(horarioSelecionado);
        props.setHorario(horarioSelecionado);
    }

    function definirHorariosDoSelect() {
        let horariosDisponiveis = ['12:00','14:00','16:00','18:00'];
        const horariosIndispoveis = props.horariosIndiponiveis.map(h => h.hora)
        horariosDisponiveis = horariosDisponiveis.filter(d => !horariosIndispoveis.includes(d ))

        setHorarios(horariosDisponiveis)
    }

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Horários Disponíveis</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="select-horario"
                    value={horario}
                    onChange={selecionarHorario}
                >
                    { horarios.map(horario => (
                        <MenuItem key={horario} value={horario}>
                            {horario}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    )

}
