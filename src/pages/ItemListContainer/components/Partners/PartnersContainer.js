import React from 'react';
import PartnersSlider from './PartnersSlider';
import { useResize } from '../../../../hooks/utilities';

function PartnersContainer() {
  const windowSize = useResize(1024);
  return (
    <div className="partners">
      <div className="partnersHeader">
        <h2>Beneficios de Mercado Puntos</h2>
        { windowSize && <a>Ver todos los beneficios</a> }
      </div>
      <div className="partnersBody">
        <PartnersSlider/>
      </div>
      {!windowSize &&
      <div className="partnerSuscribe">Ver todos los beneficios</div>
      }
    </div>
  )
}

export default PartnersContainer;