import React from 'react';

export const benefits = [
  {
    logo: "/img/disney-plus.svg",
    text: "Disney+ sin cargo"
  },
  {
    logo: "/img/star-plus.svg",
    text: "Star+ sin cargo"
  },
  {
    logo: "/img/truck.png",
    text: "Envíos gratis y rápidos desde $\u00A08.000 y 45% OFF en envíos de menos de $\u00A08.000"
  }
];

function Level6Benefit({ logo, text }) {
  
  return (
    <div className="levelBenefit">
      <div className="benefitLogo">
        <img src={logo} alt={text}/>
      </div>
      <span className="benefitText">{text}</span>
    </div>
  )
}

export default Level6Benefit;