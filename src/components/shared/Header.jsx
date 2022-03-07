import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Imagem from './Imagem';


export default function Header() {

  const sign = require('jwt-encode');
  const secret = 'secret';
  const data = {
    picture: String,
    given_name: String,
  };
  const jwt = sign(data, secret);
  console.log('jwt:', jwt);

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" >
            <Imagem />
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" >
            {/* {data.given_name} */}
            Nome
          </Typography>
        </CardContent>
      </Box>
    </Card>

  )
}
