import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosComAutorizacao from "../../util/axios/axiosComAutorizacao";
import { Divider, Grid, Typography } from "@mui/material";
import encomendaUtil from "../../util/encomenda/encomendaUtil";

export default function ResumoEncomendaPage() {
    const { id } = useParams();
    const [compra, setCompra] = useState({});

    useEffect(async () => {
        const { data } = await axiosComAutorizacao.get(`/compras/${id}`)
        setCompra(data)
    }, [])

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <h1>Resumo da Compra</h1>
            {compra.enderecoCompra &&
                <Box
                    sx={{
                        background: 'white',
                        width: '100%',
                        maxWidth: '30vw',
                    }}
                    elevation={3}
                >
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>

                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Box direction="row" spacing={5}>
                            <Typography gutterBottom variant="h5" component="div">
                                Produto(s)
                            </Typography>
                            <Box>
                                {compra.produtos.map(produto => (
                                    <Box>
                                        <Typography gutterBottom variant="body2" component="div">
                                            {
                                                Object.entries(encomendaUtil.normalizarItensProduto(produto.itensProduto)).map(([opcao, item]) => (
                                                    <Box key={opcao}>
                                                        <h4>{opcao}</h4>
                                                        <Box key={opcao}>
                                                            {item.map((item) => (
                                                                <Box key={item.id}>
                                                                    <Box>{item.nome} - R${item.total || item.valor}</Box>
                                                                    <br />
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Typography>
                                        <Divider variant="middle" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Total R${compra.valorCompra}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography gutterBottom variant="h5" component="div">
                        Data de entrega
                        <Box>
                            <Typography>
                                {compra.dia}.0{compra.mes}.{compra.ano}
                            </Typography>
                        </Box>
                    </Typography>
                    <Divider variant="middle" />
                    <Typography gutterBottom variant="h5" component="div">
                        Horário de entrega
                        <Box>
                            <Typography>
                                {compra.hora}
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            }
        </Grid>
    )
}
