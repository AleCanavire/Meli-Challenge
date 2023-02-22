import React from 'react';
import PaymentData, { payments } from './PaymentData';

function PaymentContainer() {
  return (
    <div className='paymentContainer'>
      <div className='paymentOptions'>
        {payments.map((payment, index)=>{
          return(
            <PaymentData
              key={index}
              icon={payment.icon}
              title={payment.title}
              subtitle={payment.subtitle}
            />
          )})
        }
      </div>
      <div className='moreOptions'>
        <img src='/img/more.svg'></img>
      </div>
    </div>
  )
}

export default PaymentContainer