import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginPage from "./LoginPage";
import UsuarioPage from "./usuario/UsuarioPage";
import {Divider } from "@mui/material";
import { useState } from 'react';


export default function Acessopage() {
    const [value, setValue] = useState('1');

    const cancelar = () => {
        window.location.reload();
    }

    const handleChange = (event, newValue) => {
        const tabValue = newValue || "2";
        setValue(tabValue);
    };

    return (
        <Box sx={{
                width: '100vw',
                alignItems: "center",
                justifyContent: "center"
        }}>

            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} centered>
                        <Tab label="Login" value="1" />
                        <Tab label="Registro" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <h1>Entrar</h1>
                    <Divider variant="inset" />
                    <LoginPage />
                </TabPanel>
                <TabPanel value="2">
                    <h1>Criar Conta</h1>
                    <Divider variant="inset" />
                    <UsuarioPage cancelarHandle={cancelar}/>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
