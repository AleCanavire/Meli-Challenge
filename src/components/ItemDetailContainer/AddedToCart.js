import React from 'react'
import { Link } from 'react-router-dom'

function AddedToCart(props) {
  return (
    <div className='addedContainer'>
      <div className='addedToCart'>
        <div className='productInfo'>
          <div className='imgProduct'>
            <img src={props.image}></img>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#00A650"></path><path d="M6.78786 9.39574L11.3645 4.81909L12.393 5.84761L6.78786 11.4528L3.60693 8.27185L4.63545 7.24333L6.78786 9.39574Z" fill="white"></path></svg>
          </div>
          <div className='productTitle'>
            <h2>Agregaste a tu carrito</h2>
            <p>{props.title}</p>
          </div>
        </div>
        <div className='detailCart'>
          <p>{props.quantity} producto en tu carrito:</p>
          <span>$ {props.price}</span>
          <div className='imgProduct'>
            <img src={props.image}></img>
          </div>
        </div>
        <div className='buttons'>
          <Link to={"/PreEntrega1-Canavire/cart"}>
            <button>Ver carrito</button>
          </Link>
          <button>Comprar carrito</button>
        </div>
      </div>
    </div>
  )
}

export default AddedToCart