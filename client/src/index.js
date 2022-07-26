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
import BookPage from './pages/BookPage';
import BookInfo from './pages/BookInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Signin />} />
          <Route path='books' element={<BookPage />} />
          <Route path='books/:bookId' element={<BookInfo />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
