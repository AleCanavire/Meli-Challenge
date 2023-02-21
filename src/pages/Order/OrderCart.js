import React from 'react'
import { useParams } from 'react-router-dom'

function OrderCart() {
  const idOrder = useParams().idOrder
  return (
    <div className='orderCart'>
      <h3>Gracias por tu compra!</h3>
      <span>Este es tu código de seguimiento: {idOrder}</span>
    </div>
  )
}

export default OrderCart