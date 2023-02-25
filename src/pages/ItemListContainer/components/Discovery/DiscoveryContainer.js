import React from 'react';
import Advertising, { advertising } from './Advertising';

function DiscoveryContainer({number1, number2}) {
  return (
    <div className='discovery'>
      <div className="sectionTitle">
        <h2>Descubrí</h2>
      </div>
      <div className="discoveryBody">
        {advertising.slice(number1, number2).map((advert, index) => {
          return(
            <Advertising
              key={index}
              title={advert.title}
              text1={advert.text1}
              text2={advert.text2}
              image={advert.image}
              image1024={advert.image1024}
            />
          )})
        }
      </div>
    </div>
  )
}

export default DiscoveryContainer