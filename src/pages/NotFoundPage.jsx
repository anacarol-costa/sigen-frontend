import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import imagemErro404 from "../img/imagemErro404.png"

export default function NotFoundPage() {


    return (
        <Box>
            <h2>Página não encontrada!</h2>
            <Grid img xs={'50%'}>
                <img
                    src={imagemErro404}
                    alt='imagem erro 404 de página não encontrada'
                    style={{ height: '100%', width: "100%" }}
                />
            </Grid>
        </Box>

    )

}
