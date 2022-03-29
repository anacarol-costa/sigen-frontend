import { Grid, TableFooter } from "@mui/material";

export default function RodaPe() {

    return (
        <TableFooter
            sx={{
                display: 'inline-grid',
                paddingTop: 7,
            }}
        >
            <Grid>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/ana-carolina-costa-91a74842/"> Ana Carolina da Costa Rodrigues </a></p>
            </Grid>
        </TableFooter>


    )
}