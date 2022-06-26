import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './componentes/Cart';
import CartContextProvider from './context/CartContext';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import { Login } from './componentes/logIn/Login';
import Navbar from './componentes/Navbar.js';
import React from 'react';
import { Signup } from './componentes/logIn/Signup';

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
