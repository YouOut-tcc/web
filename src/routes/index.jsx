import React from "react";
import BemVindo from "../pages/bemVindo";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/Errors";
import Home from "../pages/Home";
import Cadastro from "../pages/cadastro";
import Usuario from "../pages/InfoAoUser";
import PagEventos from "../pages/pagEventos";
import PagCupons from "../pages/pagCupons";
import PagNotificacao from "../pages/pagNotificacao";
import InfoPerfil from "../pages/infoPerfil";
import PagRecuperarSenha from "../pages/pagRecuperarSenha";
import LayoutA from "../pages/layouts/LayoutA";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import LayoutB, {
  loader as commenceHomeLoader,
} from "../pages/layouts/LayoutB";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Login from "../pages/login";
import CommenceHome from "../pages/CommenceHome";
import CadastroEstabelecimento from "../pages/cadEstabelecimento";
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
        element: <Usuario />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/home",
    element: <LayoutB />,
    id: "commerceRoot",
    loader: commenceHomeLoader,
    children: [
      {
        index: true,
        element: <CommenceHome />,
        // loader: commenceHomeLoader,
      },
      {
        path: "eventos",
        element: <PagEventos />,
        // loader: fuc
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
    element: <LayoutB />,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
