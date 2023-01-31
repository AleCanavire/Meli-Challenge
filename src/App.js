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
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:idCategory' element={<ItemListContainer/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<CartView/>} />
                <Route path='/order/:idOrder' element={<OrderCart/>}/>
              </Routes>
            </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;