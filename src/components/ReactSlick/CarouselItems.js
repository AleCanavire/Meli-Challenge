import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

function CarouselItems({ children, number }) {
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
    slidesToShow: number,
    slidesToScroll: number,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
    
  )
}

export default CarouselItems;