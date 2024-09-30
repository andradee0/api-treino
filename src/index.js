import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadastrar from './pages/cadastrar/index.jsx';
import Consultar from './pages/consultar/index.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/cadastrar' element={<Cadastrar/>}/>
      <Route path='/consultar' element={<Consultar/>}/>
      
    </Routes>
   
   </BrowserRouter>
  </React.StrictMode>
);

