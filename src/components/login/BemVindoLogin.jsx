import imagemHomeAdmin from "../../img/imagemHomeAdmin.jpg";
import { Box, Grid } from "@mui/material";
import Definicoes from "./Definicoes";


export function BemVindoLogin(usuario) {
    return (
        <Box>
            <Grid>
                <h1>SIGEN - Sistema de Gerenciamento de Encomendas e Cardápio</h1>
            </Grid>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    paddingTop:'2%',
                }}
            >
                <Grid img xs={'50%'}>
                    <img
                        src={imagemHomeAdmin}
                        alt='exibindo calendário digital'
                        style={{ height: "100%", width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Definicoes />
        </Box>
    )
}