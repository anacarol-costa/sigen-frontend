import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Box } from "@mui/material";
import { render } from "react-dom";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import SnackbarMensagem from "./components/shared/snackbar/SnackbarMensagem";
import ProdutoPage from "./pages/ProdutoPage";
import AdministradorPage from "./pages/administrador/GerenciarAdministradorPage";
import RotaPrivada from "./components/shared/autorizacao/RotaPrivada";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Loading from "./components/shared/loading/Loading";
import Acessopage from "./pages/AcessoPage";
import RotaAdministracao from "./components/shared/autorizacao/RotaAdministracao";
import ListaUsuario from "./pages/usuario/ListaUsuario";
import UsuarioPage from "./pages/usuario/UsuarioPage";
import AreaRestrita from "./pages/administrador/AreaRestrita";
import CardapioUploadPage from "./pages/CardapioUploadPage";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Provider store={store}>
      <Loading />
      <SnackbarMensagem />
      <Box>
        <Routes>
          <Route path="/" element={<Acessopage />} />
          <Route
            path="private"
            element={
              <RotaPrivada>
                <App />{" "}
              </RotaPrivada>
            }
          >
            <Route path="home" element={<HomePage />} />

            <Route
              path="administracao"
              element={
                <RotaAdministracao>
                  <div>
                    <Outlet />
                  </div>
                </RotaAdministracao>
              }
            >
              <Route path="home" element={<AreaRestrita />} />
              <Route path="produto" element={<ProdutoPage />} />
              <Route path="administrador" element={<AdministradorPage />} />
              <Route path="usuarios" element={<ListaUsuario />} />
              <Route path="novo-usuario" element={<UsuarioPage />} />    
              <Route path="cardapio" element={<CardapioUploadPage />} />         
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
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
