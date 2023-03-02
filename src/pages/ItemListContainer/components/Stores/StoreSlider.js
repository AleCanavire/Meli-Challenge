import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import Store, { stores } from "./Store";
import { useResize } from "../../../../hooks/utilities"

function StoreSlider() {
  const number = useResize(1200) ? 4 : 3
  function NextArrow(props) {
    const { onClick, currentSlide, slideCount} = props;
    return (
      <>
        {currentSlide !== slideCount - number &&
          <div className='nextArrowItems' onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
          </div>
        }
      </>
    );
  }
  
  function PrevArrow(props) {
    const { onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 &&
        <div className='prevArrowItems' onClick={onClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
        </div> }
      </>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      { stores.map((store, index) => {
        return(
          <Store
          key={index}
          name={store.name}
          background={store.background}
          logo={store.logo}
          products={store.products}
          />
        )})
      }
    </Slider>
  )
}

export default StoreSlider;