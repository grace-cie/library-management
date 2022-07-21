import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Register from './pages/Register';
import Users from './pages/Users';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='books' element={<Home />} />
        <Route path='login' element={<Signin />} />
        <Route path='register' element={<Register />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
