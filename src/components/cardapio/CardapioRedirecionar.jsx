import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import cardapioUm from "../../img/cardapioUm.png"
import cardapioDois from "../../img/cardapioDois.png"
import cardapioTres from "../../img/cardapioTres.png"

export default function CardapioRedirecionar() {

    // const redirecionarCardapio = () => {
    //     window.location.href = 'https://www.canva.com/design/DAFB0pCeswY/KMst5L1QfRh2OqxYoZXQsw/view?website#2:bolos-especiais-kg-r-115-00'
    // }
    // return (
    //     document.addEventListener('click', redirecionarCardapio)


    // );

    return (
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid img xs={'30%'}>
                    <img
                        src={cardapioUm}
                        alt='cardápio com opções de bolo para festa'
                    />
                </Grid>
                <Grid img xs={'30%'}>
                    <img
                        src={cardapioDois}
                        alt='cardápio com opções de bolo para festa'
                    />
                </Grid>
                <Grid img xs={'30%'}>
                    <img
                        src={cardapioTres}
                        alt='cardápio com opções de bolo para festa'
                    />
                </Grid>
            </Grid>
        </Box>
    )
}