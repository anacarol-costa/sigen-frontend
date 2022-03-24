import React from 'react';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage'
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormUsuarioPage from './pages/FormUsuarioPage';
import {Provider} from "react-redux";
import store from "./store/store";
import SnackbarMensagem from "./components/snackbar/SnackbarMensagem";
import Loading from "./components/loading/Loading";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
        <SnackbarMensagem />
        <Loading />
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/usuario" element={<FormUsuarioPage />} />
        </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
