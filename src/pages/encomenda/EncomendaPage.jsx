import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { Button, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EncomendaPage() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    useEffect(async () => {
        await consultarItensProduto()
    }, []);

    const consultarItensProduto = async () => {
        const ITEM_INATIVO = 0;
        const { data } = await axiosComAutorizacao.get('/itens-produto');
        setRows(data);
    }

    const detalharOpcao = (produtos) => {
        const categoria = produtos[0].categoria;
        navigate(`/private/criar-encomenda/categoria/${categoria.id}`);
        console.log(categoria);
    }


    return (
        <Box>
            <h1>Encomenda</h1>

            <Box sx={{
                display: 'flex',
                paddingLeft: '20%',
            }}>
                {Object.entries(rows).map(([categoria, produtos]) => (
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
                                {produtos.filter(produto => produto.ativo !== 0).map(produto => (
                                    <Box key={produto.id}>
                                        <Chip label={produto.nome} />
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
