import React from 'react'
import Level6Benefit,{benefits} from './Level6Benefit'

function BuyLevel6() {
  return (
    <div className='buyLevel6'>
      <div className="buyLevelHeader">
        <h2 className='headerTitle'>Suscribite al nivel 6</h2>
        <div className="levelDiscount">
          <span className="price">$ 1.439</span>
          <span className="discountPrice">$ 499
            <span className='month'> /mes</span>
          </span>
        </div>
      </div>
      <div className="buyLevelBody">
        <h3 className='bodyTitle'>Conseguí los mejores beneficios en Mercado Libre</h3>
        <div className="levelBenefits">
          { benefits.map((benefit)=>{
            return(
              <Level6Benefit
                logo={benefit.logo}
                text={benefit.text}
              />
            )})
          }
        </div>
      </div>
      <div className="buyLevelAction">
        <button className='buyLevelButton'>Suscribite</button>
      </div>
    </div>
  )
}

export default BuyLevel6;