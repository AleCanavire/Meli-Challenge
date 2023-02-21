import React from 'react'

function PaymentData({icon, title, subtitle}) {
  return (
    <div className='paymentData'>
      <img src={icon}></img>
      <div className='titles'>
        <div className='title'>{title}</div>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}

export default PaymentData