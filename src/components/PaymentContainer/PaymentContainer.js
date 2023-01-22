import React from 'react';
import PaymentData from './PaymentData';
import more from '../../assets/img/more.svg';
import creditCard from '../../assets/img/credit-card.svg';
import debitCard from '../../assets/img/debit-card.svg';
import mercadoCredits from '../../assets/img/mercado-credits.svg';
import paymentAgreement from '../../assets/img/payment-agreement.svg';

function PaymentContainer() {
  return (
    <div className='paymentContainer'>
      <div className='paymentOptions'>
        <PaymentData title="Tarjeta de crédito" subtitle="Ver promociones bancarias" icon={creditCard}/>
        <PaymentData title="Tarjeta de débito" subtitle="Ver más" icon={debitCard}/>
        <PaymentData title="Cuotas sin tarjeta" subtitle="Conocé Mercado Crédito" icon={mercadoCredits}/>
        <PaymentData title="Efectivo" subtitle="Ver más" icon={paymentAgreement}/>
      </div>
      <div className='moreOptions'>
        <img src={more}></img>
      </div>
    </div>
  )
}

export default PaymentContainer