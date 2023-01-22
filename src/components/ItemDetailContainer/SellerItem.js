import React from 'react';
import { Link } from 'react-router-dom';

function SellerItem(props) {
  // precio
  const num = props.price < 1000 ? Math.trunc(props.price * 160) : props.price;
  const price = num.toLocaleString('es-AR');

  const url = `/PreEntrega1-Canavire/detail/${props.url}`

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className='sellerItem'>
      <Link to={url} onClick={scrollToTop}>
        <div className='productImage'>
          <img src={props.image}/>
        </div>
        <div className="cardContent">
          <div className="price">$  {price}</div>
          <p className="title">{props.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default SellerItem;