import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from '../components/bemVindo';
import Header from '../components/Header';
import Carrosel from '../components/Carrosel';
import HeaderComercio from '../components/headerComercio';
import Comentarios from '../components/Comentarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BemVindo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
