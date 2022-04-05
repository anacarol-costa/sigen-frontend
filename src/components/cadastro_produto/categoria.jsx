import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { React, useState } from "react";

export default function categoria() {
    // const [categoriaNova, setCategoriaNova] = useState('');

    // const handleChange = (event) => {
    //     setCategoriaNova(event.target.value);
    // };

    const validacaoCategoria = Yup.object().shape({
        categoria: Yup.string()
            .required('campo obrigatório'),
    })

    // const {
    //     register,
    //     handlesubmit,
    //     formState: { erros }
    // } = useForm({
    //     resolver: yupResolver(validacaoCategoria)
    // })



    return (
        <Box>
            <FormControl required
                sx={{ width: '30vw' }}>
                {/* <InputLabel id="categoriaNova">Categoria</InputLabel> */}
                <Select
                    // labelId="categoriaNova"
                    // id="categoriaNova"
                    // value={categoriaNova}
                    // label="Categoria"
                    // onChange={handleChange}
                >
                    {/* <MenuItem value={10}>Festa</MenuItem>
                    <MenuItem value={20}>Sobremesa</MenuItem>
                    <MenuItem value={30}>Bolos caseiros</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    )
}