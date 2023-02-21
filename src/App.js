import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartView from './pages/CartView/CartView';
import OrderCart from './pages/Order/OrderCart';

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
            <footer className='footer'>
              <span>Desarrollado por <a href='https://www.linkedin.com/in/alexander-canavire/' target="blank">Alexander Canavire</a></span>
              <p>ATENCIÓN: Esta web se trata de un challenge, no es un intento de phishing hacia los usuarios que la visitan.</p>
            </footer>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;