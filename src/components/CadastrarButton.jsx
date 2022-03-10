import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export function CadastrarButton(props) {

  const navigate = useNavigate();

  const formUsuario = () => {
    navigate('/usuario');
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant='contained' onClick={formUsuario}>Cadastre-se</Button>

    </Box>


  )

}

export default CadastrarButton