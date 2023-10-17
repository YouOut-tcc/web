import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Cadastro from './pages/cadastro';
import BemVindo from './components/bemVindo';
import Header from './components/Header';
import Carrosel from './components/Carrosel';
import HeaderComercio from './components/headerComercio';
import Home from './pages/Home'
import PgNotificacao from './pages/pgNotificacao';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Cadastro/> */}
    {/* <BemVindo/> */}
    {/* <Header/> */}
    {/* <Carrosel/> */}
    {/* <HeaderComercio/> */}
    {/* <Home/> */}
    {/* <PagNotificacao/> */}
    <App/>
    {/* <PagCupons/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
