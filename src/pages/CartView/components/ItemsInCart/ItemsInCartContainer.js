import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../../../context/cartContext';
import { createOrder } from '../../../../services/firestore';
import FormOrder from '../FormOrder/FormOrder';
import ItemInCart from './ItemInCart';

function ItemsInCartContainer() {

  // ------ CART CONTEXT ------
  const myContext = useContext(cartContext);
	const cart = myContext.cart

  // Eliminar todas la unidades de un producto
  const { removeItems } = useContext(cartContext);
  function onRemoveItems(id) {
    removeItems(id);
  }

  // Añadir una unidad de producto
  const { addItem } = useContext(cartContext);
  function onAddItem(id) {
    addItem(id)
  }

  // Eliminar una unidad de producto
  const { removeItem } = useContext(cartContext);
  function onRemoveItem(id) {
    removeItem(id)
  }

  // Precio total del carrito
  const totalCart = Math.trunc((myContext.priceTotal()) + 899).toLocaleString('es-AR');

  // ------ ORDEN DE COMPRA ------
  const navigate = useNavigate();
  async function handleCheckout(evt, data){
    const order = {
      buyer: data,
      items: cart,
      total: totalCart,
      date: new Date()
    };
    const orderId = await createOrder(order);
    navigate(`/order/${orderId}`)
  }
  
  return (
    <>
      {
        cart.map((product) => {
          return(
            <ItemInCart
            product={product}
            key={product.id}
            onRemoveItems={onRemoveItems}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}/>
          )
        })
      }
      <div className='totalCart'>
        <div className='shipping'>
          <span className='location'>Envío a Capital Federal</span>
          <span className='priceShipping'>$899</span>
        </div>
        <div className='itemsPrice'>
          <span className='totalShipping'>Total con envío </span>
          <span className='finalPrice'>$ {totalCart}</span>
        </div>
      </div>
      <FormOrder onSubmit={handleCheckout}/>
    </>
  )
}

export default ItemsInCartContainer