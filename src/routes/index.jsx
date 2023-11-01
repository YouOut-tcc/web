import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from "../pages/bemVindo";
import Header from "../components/Header";
import Carrosel from "../components/Carrosel";
import HeaderComercio from "../components/headerComercio";
import Comentarios from "../components/Comentarios";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import ErrorPage from "../pages/Errors";

import Home from "../pages/Home";
import Cadastro from "../pages/cadastro";
import Usuario from "../pages/InfoAoUser"
import PagEventos from "../pages/pagEventos";
import PagCupons from "../pages/pagCupons";
import PagNotificacao from "../pages/pagNotificacao";
import InfoPerfil from "../pages/infoPerfil";
import PagRecuperarSenha from "../pages/pagRecuperarSenha";
// import LayoutB from "../pages/Root";
import LayoutA from "../pages/layouts/LayoutA";
import LayoutB from "../pages/layouts/LayoutB";
import { BiEnvelope } from "react-icons/bi";
import Login from "../pages/login"
import CommenceHome ,{ loader as commenceHomeLoader} from "../pages/CommenceHome";
import CadastroEstabelecimento from "../pages/cadEstabelecimento";
import { loader } from "../pages/CommenceHome";
import theme from "../styles/Global";
import { ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutA />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BemVindo />,
      },
      {
        path: "/bemvindo",
        element: <BemVindo />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "/cadastro/estabelecimento",
        element: <CadastroEstabelecimento />,
      },
      {
        path: "usuario",
        element: <Usuario/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },
  {
    path: "/home",
    element: <LayoutB />,
    children: [
      {
        index: true,
        element: <CommenceHome />,
        loader: commenceHomeLoader,
      },
      {
        path: "eventos",
        element: <PagEventos />,
      },
      {
        path: "cupons",
        element: <PagCupons />,
      },
      {
        path: "notificacao",
        element: <PagNotificacao />,
      },
      {
        path: "perfil",
        element: <InfoPerfil />,
      },
      {
        path: "comercio/:uuid",
        element: <Home />,
      },
    ],
  },
  {
    path: "/eventos",
    element: <PagEventos />,
  },
  {
    path: "/recuperarSenha",
    element: <PagRecuperarSenha />,
  },
  {
    path: "/layoutA",
    element: <LayoutA />,
  },
  {
    path: "/layoutB",
    element: <LayoutB/>
  },
]);

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>

  ) 
}
