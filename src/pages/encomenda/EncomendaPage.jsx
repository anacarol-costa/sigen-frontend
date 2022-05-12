import {Box} from "@mui/system";
import {useEffect, useState} from "react";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import {Button, Chip, Divider, Grid, Paper, Stack, Typography} from "@mui/material";

export default function EncomendaPage() {
    const [rows, setRows] = useState([]);

    useEffect(async () => {
        await consultarItensProduto()
    }, []);

    const consultarItensProduto = async () => {
        const {data} = await axiosComAutorizacao.get('/itens-produto');
        setRows(data);
    }

    const detalharOpcao = (produtos) => {
        const categoria = produtos[0].categoria;
        console.log(categoria);
    }


    return (
        <Box>
            <h1>Encomenda</h1>

            <Box sx={{
                display: 'flex',
                paddingLeft: '20%',

            }}>
                {Object.entries(rows).map(([categoria, produtos]) =>(
                    <Box
                        sx={{
                            background: 'white',
                            margin: '5px',
                            width: '100%',
                            maxWidth: 350,
                        }}
                            elevation={3}
                            key={categoria}
                    >
                        <Box sx={{ my: 3, mx: 2 }}>
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {categoria}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{ m: 2 }}>
                            <Typography gutterBottom variant="body1">
                                Opções
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {produtos.map(v => (
                                    <Box key={v.id}>
                                        <Chip label={v.nome} />
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                            <Button onClick={() => detalharOpcao(produtos)}>Selecionar Opção</Button>
                        </Box>
                    </Box>
                ))}
            </Box>

        </Box>
    )

}
