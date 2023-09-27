import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from '../pages/bemVindo';
import Cadastro from '../pages/cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BemVindo />} />
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
