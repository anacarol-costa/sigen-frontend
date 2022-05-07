import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axiosComAutorizacao from '../../../util/axios/axiosComAutorizacao';
import OpcaoProdutoList from "../opcao/OpcaoProdutoList";
import ItemProdutoDialog from './ItemProdutoDialog';

export default function ItensProduto(props) {
    const [open, setOpen] = useState(false);
    const [descricoesProduto, setDescricoesProduto] = useState([]);
    // const { errors, register } = props.formParams;

    useEffect(async () => {
        await recuperarDescricaoProduto();
      }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const recuperarDescricaoProduto = async () => {
        try {
          const { data } = await axiosComAutorizacao.get("/itens-opcao");
          setDescricoesProduto(data);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <Box>

            <Typography>
                Itens do produto:
            </Typography>
            <ItemProdutoDialog 
            mostrarDialog={open}
            fecharDialog={handleClose}
            atualizarDescricaoItemProduto={recuperarDescricaoProduto}
            />
            <FormControl sx={{ width: '100%' }} >
                <InputLabel id="demo-simple-select-label" >
                    Descrição
                </InputLabel>
                <Select
                    sx={{ width: '100%' }}
                    required
                    variant="filled"
                    id="descricao-do-produto"
                    label="Descrição do produto"
                    type="text"
                // {...register('descricao')}
                // error={errors.descricao ? true : false}
                >
                    <MenuItem onClick={handleClickOpen}>Criar Descrição</MenuItem>
                    {descricoesProduto.map((descricao) =>
                    (
                        <MenuItem
                            key={descricoesProduto.id}
                            value={descricoesProduto.id}>
                            {descricoesProduto.item}
                        </MenuItem>
                    )
                    )}
                </Select>
                {/* <Typography variant="inherit" color="#d32f2f">
                    {errors.descricao?.message}
                </Typography> */}
            </FormControl>
            <OpcaoProdutoList />
        </Box >
    );
}



