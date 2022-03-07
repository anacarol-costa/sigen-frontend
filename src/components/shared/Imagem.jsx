import { Avatar, Stack } from '@mui/material'
import React from 'react'

export default function Imagem() {

  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 24, height: 24 }}
      /> */}
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}

      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56, left: 1140 }}
      />
    </Stack>
  )
}

