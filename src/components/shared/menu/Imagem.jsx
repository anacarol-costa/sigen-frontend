import { Avatar, Stack } from '@mui/material'
import React from 'react'

export default function Imagem(props) {

  return (
    <Stack>
      <Avatar
        alt="Foto do Usuário"
        sx={{ width: 56, height: 56 }}
        src={props.img}
      />
    </Stack>
  )
}

