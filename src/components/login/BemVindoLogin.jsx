import imagem from "../../img/imagemHome.jpg";
import { Box } from "@mui/material";


export function BemVindoLogin(usuario) {
    return (
        <Box>
            <h1>SIGEN - Sistema de Gerenciamento de Encomendas e Cardápio</h1>
            <br />
            <h2>Seja bem vindo</h2>
            <br />
            <p>Tem como foco a gestão de encomendas, cardápio e promoções que ficarão disponíveis online para os consumidores finais.</p>
            <img
                src={imagem}
                alt='café'
            />

        </Box>

    )
}