import React from 'react';
import { Link } from 'react-router-dom';
import { priceItem, scrollToTop } from '../../../../hooks/utilities';

function SellerItem({ product }) {
  // Prices
  const { price } = priceItem(product.price);
  const priceArg = price.toLocaleString('es-AR');

  const url = `/detail/${product.id}`

  return (
    <div className="sellerItem">
      <Link to={url} onClick={scrollToTop}>
        <div className="productImage">
          <img src={product.image || product.pictures[0].url} alt={product.title}/>
        </div>
        <div className="cardContent">
          <div className="price">$  {priceArg}</div>
          <p className="title">{product.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default SellerItem;