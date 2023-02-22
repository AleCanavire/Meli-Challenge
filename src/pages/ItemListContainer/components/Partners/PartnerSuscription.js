import React from 'react';
import { useResize } from '../../../../hooks/utilities';

export function PartnersInfo() {
  const windowSize = useResize(1024);
  const height = windowSize ? "0%" : "50px";

  const partners = [
    {
      logo: "/img/partner-disney-star.jpg",
      background: "/img/background-disney-star.jpg",
      gradient: `linear-gradient(0deg, rgb(8,19,48) ${height}, rgba(8,19,48, 0.0001) 100%)`,
      benefit: "Sin cargo con el nivel\u00A06",
      partnerName:"Disney+ y Star+"
    },
    {
      logo: "/img/partner-hbo.png",
      background: "/img/background-hbo.webp",
      gradient: `linear-gradient(0deg, rgb(60,3,78) ${height}, rgba(60,3,78, 0.0001) 100%)`,
      lineText: "7 DÍAS GRATIS",
      benefit: "Hasta 50% OFF",
      partnerName:"HBO Max"
    },
    {
      logo: "/img/partner-paramount.png",
      background: "/img/background-paramount.jpg",
      gradient: `linear-gradient(0deg, rgb(0,100,255) ${height}, rgba(0,100,255, 0.0001) 100%)`,
      lineText: "7 DÍAS GRATIS",
      benefit: "Hasta 50% OFF",
      partnerName:"Paramount+"
    }
  ]
  return partners;
}
  

function PartnerSuscription({ logo, background, gradient, lineText, benefit, partnerName }) {
  return (
    <div className="partnerContainer">
      <div className="partnerSuscription">
        <img className="partnerBackground" src={background} alt={partnerName} />
        <div className="partnerGradient" style={{background: gradient}}></div>
        <div className="partnerContent">
          <img className="partnerLogo" src={logo}/>
          <div className="partnerText">
            {lineText &&
              <span className="partnerLineText">{lineText}</span>
            }
            <span className="partnerBenefit">{benefit}</span>
            <span className="partnerName">{partnerName}</span>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default PartnerSuscription;