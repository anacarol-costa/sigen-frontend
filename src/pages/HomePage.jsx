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
                    <li>O sistema verificando que você não possue endereço cadastrado, um alert/dialog (caixinha com mensagem) aparecerá na tela para que você cadastre seu endereço e assim dar prosseguimento a encomenda. Após o cadastro, é só clicar novamente em encomenda;</li>
                    <li>Ao carregar a página encomenda, você deve escolher qual categoria de produto quer escolher. Exemplo, para encomendar um bolo para festa, clique em Festa;</li>
                    <li>Depois de escolher a categoria, aparecerá os produtos e suas opções;</li>
                    <li>Com os produtos escolhidos, agora deve escolher a data e horário para entrega;</li>                    
                    <li>Conferidos os dados, clique em "encomendar"</li>                    
                    <li>Na próxima tela, aparecerá o resumo da sua encomenda, como: produto(s), total, data e horário de entrega;</li>                    
                    <li>Pronto! agora é só aguardar a data de entrega do seu pedido.</li>
                </ol>
            </Grid>
            <RodaPe />
        </Box>

    )
}


