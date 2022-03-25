import { Avatar, Stack } from '@mui/material'
import React from 'react'

export default function Imagem(props) {
 const avatar = () => {
     if(!props.img) {
        const label = montarLabelAvatar(props.nome);

        return <Avatar sx={{ bgcolor: '#fd7e9' }}>{label}</Avatar>
     } else {
         return <Avatar alt="Foto do Usuário" sx={{ width: 56, height: 56 }} src={props.img} />
     }
 }

 const montarLabelAvatar = (nome) => {
    return nome ? nome[0].toUpperCase() : 'A';
 }

  return (
    <Stack>
        { avatar() }
    </Stack>
  )
}

