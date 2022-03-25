import React from 'react';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage'
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormUsuarioPage from './pages/FormUsuarioPage';
import {Provider} from "react-redux";
import store from "./store/store";
import SnackbarMensagem from "./components/snackbar/SnackbarMensagem";
import CadastroUnidadeMedidaPage from "./pages/CadastroUnidadeMedidaPage";
import HomePage from "./pages/HomePage";
import {Box} from "@mui/material";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
        <SnackbarMensagem />
        <App />
        <Box sx={{ pt: 15}} >
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/usuario" element={<FormUsuarioPage />} />
                <Route path="/unidade-medida" element={<CadastroUnidadeMedidaPage />} />
            </Routes>
        </Box>
    </Provider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
