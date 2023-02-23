import React from 'react';
import { Link } from 'react-router-dom';
import { priceItem, scrollToTop } from '../../../../hooks/utilities';

function Item(props) {
  const url = `/detail/${props.url}`;
  const { price } = priceItem(props.price);
  const priceArg = price.toLocaleString('es-AR');

  return (
    <div className='itemCard'>
      <div className='item'>
        <Link to={url} onClick={scrollToTop}>
          <div className='imgProduct'>
            <img src={props.img} alt={props.title}></img>
          </div>
          <div className='itemContent'>
            <div className='itemPrice'>
              <span className='priceSimbol'>$</span>
              <span className='price'>{priceArg}</span>
            </div>
            <div className='itemTitle'>
              <span>Envío gratis</span> 
              <p>{props.title}</p>
            </div>
          </div>
          <svg version="1.1" viewBox="0 0 36 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m33.1 3.2-0.1-0.1c-3.9-4-10.4-4.1-14.5-0.2l-0.5 0.5-0.5-0.5c-4.1-3.9-10.6-3.8-14.5 0.2l-0.1 0.1c-3.9 4-3.8 10.5 0.2 14.4l14.9 14.4 14.9-14.3c2-1.9 3.1-4.4 3.1-7.2 0-2.7-1-5.3-2.9-7.3zm-2.3 12.3-12.8 12.4-12.8-12.4c-2.9-2.8-3-7.3-0.2-10.2l0.1-0.1c2.8-2.9 7.4-3 10.3-0.2l2.6 2.5 2.6-2.5c2.9-2.8 7.5-2.7 10.3 0.2l0.1 0.1c2.7 2.9 2.7 7.4-0.2 10.2z"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Item