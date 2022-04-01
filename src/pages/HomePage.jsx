import { Box, Grid } from "@mui/material";
import RodaPe from "../components/footer/RodaPe";
import imagemDois from "../img/ImagemDois.jpg"

export default function HomePage() {


    return (
        <Box
            sx={{
                paddingTop: '2%',
                width: "100%"
            }}
        >
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid img xs={'50%'}>
                    <img
                        src={imagemDois}
                        alt='bolo de frutas vermelhas' style={{ height: "100%", width: "100%" }} />

                </Grid>
            </Grid>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    paddingTop: '2%',
                    textAlign: "justify",
                    paddingRight: '2%'

                }}
            >
                <h2>Passo a passo como encomendar:</h2>
                <ol>
                    <li>Primeiramente, caso haja alguma dúvida sobre os produtos, acesse cardápio. Lá contém fotos, preços e quantidade. Ainda havendo dúvidas, entre em contato conosco ou acesse nosso perfil no instagram;</li>
                    <li>Clique em encomenda no menu superior;</li>
                    <li>Ao carregar a página encomenda, você deve escolher qual categoria de produto quer escolher. Exemplo, para encomendar um bolo para festa, clique em Festa;</li>
                    <li>Depois de escolher a categoria, aparecerá os produtos e suas opções;</li>
                    <li>Com os produtos escolhidos, agora deve escolher a data para entrega ou retirada e preencher o campo endereço;</li>
                    <li>Conferidos os dados, clique em "comprar do carrinho"</li>
                    <li>Na próxima tela, escolha a forma de pagamento e clique em "encomendar pedido";</li>
                    <li>Uma mensagem de confirmação aparecerá informando o número do pedido;</li>
                    <li>Pronto! agora é só aguardar a data para retirar ou que seja entregue seu pedido.</li>
                </ol>
            </Grid>
            <RodaPe />
        </Box>

    )
}


