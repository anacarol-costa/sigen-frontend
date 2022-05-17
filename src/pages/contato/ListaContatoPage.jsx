import Box from '@mui/material/Box';
import ListaContato from '../../components/contato/ListaContato';

export default function ListaContatoPage() {

    return (
        <Box>
            <h1>Lista de Contatos</h1>
            <Box>
                <ListaContato />
            </Box>
        </Box>
    )
}