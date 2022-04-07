import Box from "@mui/material/Box";
import CategoriaSelect from "../components/produto/CategoriaSelect";
import UnidadeMedida from "../components/produto/UnidadeMedida";

export default function ProdutoPage() {


    return (
        <Box>
            <CategoriaSelect />
            <UnidadeMedida />
        </Box>
    )

}
