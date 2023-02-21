import React from 'react';
import PaymentData from './PaymentData';

function PaymentContainer() {
  return (
    <div className='paymentContainer'>
      <div className='paymentOptions'>
        <PaymentData title="Tarjeta de crédito" subtitle="Ver promociones bancarias" icon='/img/credit-card.svg'/>
        <PaymentData title="Tarjeta de débito" subtitle="Ver más" icon='/img/debit-card.svg'/>
        <PaymentData title="Cuotas sin tarjeta" subtitle="Conocé Mercado Crédito" icon='/img/mercado-credits.svg'/>
        <PaymentData title="Efectivo" subtitle="Ver más" icon='/img/payment-agreement.svg'/>
      </div>
      <div className='moreOptions'>
        <img src='/img/more.svg'></img>
      </div>
    </div>
  )
}

export default PaymentContainer