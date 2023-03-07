import React from 'react';
import { useResize } from '../../../../hooks/utilities';
import PaymentData, { payments } from './PaymentData';

function PaymentContainer() {
  return (
    <div className='paymentContainer'>
      <div className='paymentOptions'>
        { useResize(1024)
          ? payments.map((payment, index)=>{
            return(
              <PaymentData
                key={index}
                icon={payment.icon}
                title={payment.title}
                subtitle={payment.subtitle}
              />
            )})
          : <PaymentData
              icon={"/img/credit-card.svg"}
              title={"Mismo precio en hasta 6 cuotas"}
              subtitle={"Ver promociones bancarias"}
            />
        }
      </div>
      { useResize(1024) &&
        <div className='moreOptions'>
          <img src='/img/more.svg'></img>
        </div>
      }
    </div>
  )
}

export default PaymentContainer