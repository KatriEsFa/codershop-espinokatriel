import './App.css';
import Navbar from './componentes/Navbar.js';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './componentes/CartContext';
import Cart from './componentes/Cart';

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
