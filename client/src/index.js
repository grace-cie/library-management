import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home';

//redux
import { store } from './redux/store/store';
import { Provider } from 'react-redux';

//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='books' element={<Home />} />
          <Route path='login' element={<Signin />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
