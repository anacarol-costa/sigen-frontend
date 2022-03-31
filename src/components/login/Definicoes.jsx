import { styled } from '@mui/material/styles';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
    paddingLeft: '1%',
    textAlign: 'center',
    width: '100%',
    ...theme.typography.body1,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

export default function Definicoes() {

    const sobre = (
        <div>
            <p>Possui a <b>missão</b> de ajudar as pessoas a alcançar todo o seu potencial.</p>
            <p><b>Visando</b> ser a melhor aplicação de gerenciamento de encomendas e cardápio do Brasil.</p>
            <p>E tendo como <b>valores</b> a disponibilidade, responsividade e escalabilidade.</p>
        </div>
    )

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{
                paddingTop: '1%',
                paddingBottom: '1%'

            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '60%',
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.60',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2,

                }}
            >
                <Root
                    sx={{
                        paddingTop: '1%',
                    }}
                >
                    <ThemeProvider
                        theme={theme}>
                        <Typography variant="h3">Sobre a SIGEN</Typography>
                        {sobre}
                    </ThemeProvider>
                </ Root>
            </Box>
        </Grid>
    )
}