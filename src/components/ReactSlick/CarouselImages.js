import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Slider from "react-slick";

function CarouselImages(images) {
  const [slide, setSlide] = useState({
    activeSlide: 1
  })

  const { id } = useParams()
  useEffect(() => {
    setSlide({ activeSlide: 1 })
  }, [id]);

  let imageCount;
  typeof images.images === "string"
  ? imageCount = 1
  : imageCount = images.images.length;

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setSlide({ activeSlide: current + 1 })
  };

  return (
    <>
      <div className="imageNumber">
        {`${slide.activeSlide} / ${imageCount}`}
      </div>
      <Slider {...settings}>
        { typeof images.images === "string"
          ? <div>
              <img src={images.images} />
            </div>
          : images.images.map((image, index)=>{
            return(
              <div key={index}>
                <img src={image.url} />
              </div>
            )})
        }
      </Slider>
    </>
  )
}

export default CarouselImages;