import { Box } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "./App";
import CardapioRedirecionar from "./components/cardapio/CardapioRedirecionar";
import InstagramRedirecionar from "./components/instagram/InstagramRedirecionar";
import RotaAdministracao from "./components/shared/autorizacao/RotaAdministracao";
import RotaPrivada from "./components/shared/autorizacao/RotaPrivada";
import Loading from "./components/shared/loading/Loading";
import SnackbarMensagem from "./components/shared/snackbar/SnackbarMensagem";
import "./index.css";
import Acessopage from "./pages/AcessoPage";
import AreaRestrita from "./pages/administrador/AreaRestrita";
import AdministradorPage from "./pages/administrador/GerenciarAdministradorPage";
import ConsultarEncomendasPage from "./pages/agenda/ConsultarEncomendasPage";
import CardapioUploadPage from "./pages/CardapioUploadPage";
import CarrosselUploadPage from "./pages/CarrosselUploadPage";
import FormContatoPage from "./pages/contato/FormContatoPage";
import ListaContatoPage from "./pages/contato/ListaContatoPage";
import GerenciarContaUsuario from "./pages/contaUsuario/GerenciarContaUsuario";
import ListaEncomendaUsuarioPage from "./pages/contaUsuario/ListaEncomendaUsuarioPage";
import CriarEncomendaPage from "./pages/encomenda/CriarEncomendaPage";
import EncomendaPage from "./pages/encomenda/EncomendaPage";
import ResumoEncomendaPage from "./pages/encomenda/ResumoEncomendaPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ListaProdutoPage from "./pages/produto/ListaProdutoPage";
import ProdutoPage from "./pages/ProdutoPage";
import EnderecoPage from "./pages/usuario/EnderecoPage";
import ListaUsuario from "./pages/usuario/ListaUsuario";
import UsuarioPage from "./pages/usuario/UsuarioPage";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

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
            <Route path="endereco" element={<EnderecoPage />} />
            <Route path="encomenda" element={<EncomendaPage />} />
            <Route
              path="encomenda/:id/resumo"
              element={<ResumoEncomendaPage />}
            />
            <Route
              path="criar-encomenda/categoria/:id"
              element={<CriarEncomendaPage />}
            />
            <Route path="contato" element={<FormContatoPage />} />
            <Route path="instagram" element={<InstagramRedirecionar />} />
            <Route
              path="gerenciar-conta/:id"
              element={<GerenciarContaUsuario />}
            />
            <Route
              path="lista-encomenda/:id"
              element={<ListaEncomendaUsuarioPage />}
            />
            <Route path="cardapio" element={<CardapioRedirecionar />} />
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
              <Route path="novo-produto" element={<ProdutoPage />} />
              <Route
                path="produto/lista-produto"
                element={<ListaProdutoPage />}
              />
              <Route path="administrador" element={<AdministradorPage />} />
              <Route path="usuarios" element={<ListaUsuario />} />
              <Route path="novo-usuario" element={<UsuarioPage />} />
              <Route path="cardapio" element={<CardapioUploadPage />} />
              <Route path="carrossel" element={<CarrosselUploadPage />} />
              <Route path="lista-contato" element={<ListaContatoPage />} />
              <Route
                path="agenda-encomendas"
                element={<ConsultarEncomendasPage />}
              />
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
