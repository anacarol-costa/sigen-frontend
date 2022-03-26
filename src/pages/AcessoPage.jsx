import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginPage from "./LoginPage";
import UsuarioPage from "./UsuarioPage";
import {Divider } from "@mui/material";


export default function Acessopage() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                    <UsuarioPage />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
