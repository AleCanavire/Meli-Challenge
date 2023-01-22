import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import OrderCart from './components/Order/OrderCart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <main className="mainHome">
              <div className="shadow"></div>
              <Routes>
                <Route path='PreEntrega1-Canavire/' element={<ItemListContainer/>} />
                <Route path='PreEntrega1-Canavire/category/:idCategory' element={<ItemListContainer/>} />
                <Route path='PreEntrega1-Canavire/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='PreEntrega1-Canavire/cart' element={<CartView/>} />
                <Route path='PreEntrega1-Canavire/order/:idOrder' element={<OrderCart/>}/>
              </Routes>
            </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;