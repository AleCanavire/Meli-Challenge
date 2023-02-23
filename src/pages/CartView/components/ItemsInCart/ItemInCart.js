import React from 'react'
import { Link } from 'react-router-dom';
import { priceItem } from '../../../../hooks/utilities';

function ItemInCart({ product, onRemoveItems, onAddItem, onRemoveItem }) {

	// Precio
  const { price } = priceItem(product.price);
	const priceItems = Math.trunc(price * product.quantity).toLocaleString('es-AR');

  // Category
  const replace = product.category.replace("-", " de ");
  const category = replace.charAt(0).toUpperCase() + replace.slice(1);

	return (
		<div className='itemInCart'>
			<div className='imgProduct'>
				<img src={product.image || product.thumbnail} alt={product.title}></img>
			</div>
			<div className='itemInfo'>
				<div className='title'>
					<Link to={`/detail/${product.id}`}>
						<h2>{product.title}</h2>
					</Link>
          <h3>Categoria: {category}</h3>
				</div>
				<div className='count'>
          <div className='countButtons'>
            <button onClick={() => {onRemoveItem(product.id)}} className='addRemove'>-</button>
            <div className='quantity'>{product.quantity}</div>
            <button onClick={() => {onAddItem(product.id)}} className='addRemove'>+</button>
          </div>
				</div>
				<div className='price'>
				<span className='simbolPrice'>$</span>
				<span className='priceNumber'>{priceItems}</span>
				</div>
			</div>
			<div className='buyOptions'>
        <ul>
          <li onClick={() => {onRemoveItems(product.id)}}>Eliminar</li>
          <li>Más productos del vendedor</li>
          <li>Comprar ahora</li>
          <li>Guardar para después</li>
        </ul>
			</div>
		</div>
	)
}

export default ItemInCart;