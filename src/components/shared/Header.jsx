import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Imagem from './Imagem';

export default function Header({ usuario }) {

  return (
    <Card>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        p: 1,
        m: 1,
      }}>
        <CardContent>
          <Typography>
            <Imagem img={usuario.picture} />
          </Typography>
        </CardContent>
      </Box>
    </Card >

  )
}
