import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemsInCartContainer from './ItemsInCartContainer';

function CartView() {

  const myContext = useContext(cartContext);

	return (
    <div className='cartView'>
      <div className='sections'>
        <ul>
          <li><span>{`Carrito (${myContext.itemsInCart()})`}</span></li>
          <li><span>{`Guardados (${"0"})`}</span></li>
          <span onClick={myContext.clearCart} className='clearCart'>Vaciar Carrito</span>
        </ul>
      </div>
      {myContext.itemsInCart() !== 0 ?
      <ItemsInCartContainer/> :
      <div className='emptyCart'>
        <h3>Tu carrito está vacío</h3>
        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
      </div>}
    </div>
	)
}

export default CartView;