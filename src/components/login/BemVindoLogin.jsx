import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";


export function BemVindoLogin(usuario) {
    return (
        <Box>
            <h1>SIGEN - Sistema de Gerenciamento de Encomendas e Cardápio</h1>
            <br />
            <h2>Seja bem vindo</h2>
            <br />
            <p>Tem como foco a gestão de encomendas, cardápio e promoções que ficarão disponíveis online para os consumidores finais.</p>
            <Image
                src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
                alt='café'
            />

        </Box>

    )
}