import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";

function CarouselHeader() {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className='nextArrow' onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
      </div>
    );
  }
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='prevArrow' onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3483fa"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483fa"></path></svg>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div></div>
    )
  };
  return (
    <div className="carouselHeader">
      <Slider {...settings}>
        <div className='imageSlide'> <img src='/img/slider1.webp'></img> </div>
        <div className='imageSlide'> <img src='/img/slider2.webp'></img> </div>
        <div className='imageSlide'> <img src='/img/slider3.webp'></img> </div>
        <div className='imageSlide'> <img src='/img/slider4.webp'></img> </div>
        <div className='imageSlide'> <img src='/img/slider5.webp'></img> </div>
        <div className='imageSlide'> <img src='/img/slider6.webp'></img> </div>
      </Slider>  
    </div>
  )
}

export default CarouselHeader;