import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export function CadastrarButton(props) {

  const navigate = useNavigate();

  const formUsuario = () => {
    navigate('/usuario');
  }

  return (
    <Box sx={{
      display: 'inline-grid',
      justifyContent:"center",
      width: '100%',
    }}>
      <Button variant='contained' onClick={formUsuario}>Cadastre-se</Button>
    </Box>


  )

}

export default CadastrarButton
