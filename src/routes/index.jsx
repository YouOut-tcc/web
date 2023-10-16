import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from '../components/bemVindo';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import HeaderComercio from '../components/headerComercio';
import Comentarios from '../components/Comentarios';

// import BemVindo from '../pages/bemVindo';
import Cadastro from '../pages/cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
