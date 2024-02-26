import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCountainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Carrito from './components/Carrito/Carrito';
import { CartProvider } from './CartContext/CartContex';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (

        <div className="max-width font-mono bg-[#F1FFE7]">
          <CartProvider>
            <BrowserRouter>

                <NavBar/>
        
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/licores' element={<ItemListContainer />} />
                    <Route path='/licores/:categoria' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/carrito' element={<Carrito />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>

            </BrowserRouter>

            </CartProvider>

        </div>
  );
}

export default App;
