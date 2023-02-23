import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import PartnerSuscription, { PartnersInfo } from './PartnerSuscription';

function PartnersSlider() {
  const partners = PartnersInfo();

  const settings = {
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {partners.map((partner, index) => {
        return(
          <PartnerSuscription 
            key={index}
            logo={partner.logo}
            background={partner.background}
            gradient={partner.gradient}
            lineText={partner.lineText}
            benefit={partner.benefit}
            partnerName={partner.partnerName}
          />
        )})
      }
    </Slider>
  )
}

export default PartnersSlider;