import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from '../components/bemVindo';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import HeaderComercio from '../components/headerComercio';
import Comentarios from '../components/Comentarios';


import Home from '../pages/Home';
import Cadastro from '../pages/cadastro';
import PagEventos from '../pages/pagEventos';
import PagCupons from '../pages/pagCupons';
import PagNotificacao from '../pages/pagNotificacao';
import InfoPerfil from '../pages/infoPerfil';
import PagRecuperarSenha from '../pages/pagRecuperarSenha';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/eventos' element={<PagEventos />} />
        <Route path='/cupons' element={<PagCupons />} />
        <Route path='/notificacao' element={<PagNotificacao />} />
        <Route path='/perfil' element={<InfoPerfil />} />
        <Route path='/recuperarSenha' element={<PagRecuperarSenha />} />
      </Routes> 
    </BrowserRouter>
  
  );
}

export default App;
