import React from 'react';

export const payments = [
  {
    title: "Tarjeta de crédito",
    subtitle: "Ver promociones bancarias",
    icon: "/img/credit-card.svg"
  },
  {
    title: "Tarjeta de débito",
    subtitle: "Ver más",
    icon: "/img/debit-card.svg"
  },
  {
    title: "Cuotas sin tarjeta",
    subtitle: "Conocé Mercado Crédito",
    icon: "/img/mercado-credits.svg"  
  },
  {
    title: "Efectivo",
    subtitle: "Ver más",
    icon: "/img/payment-agreement.svg"
  }
]

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