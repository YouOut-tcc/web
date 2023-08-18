import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from '../pages/bemVindo';

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
