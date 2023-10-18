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
import PagEventos from "../pages/pagEventos";
import PagCupons from "../pages/pagCupons";
import PagNotificacao from "../pages/pagNotificacao";
import InfoPerfil from "../pages/infoPerfil";
import PagRecuperarSenha from "../pages/pagRecuperarSenha";
import Layout1 from "../pages/Root";
import { BiEnvelope } from "react-icons/bi";
import Login from "../pages/login"
import CommenceHome from "../pages/CommenceHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BemVindo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/bemvindo",
    element: <BemVindo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout1 />,
    children: [
      {
        path: "",
        element: <CommenceHome />,
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
        path: "comercio",
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
    path: "/layout",
    element: <Layout1/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
