import React from 'react'

export const advertising = [
  {
    title: "Infaltables makeup",
    text1: "hasta 30% OFF",
    text2: "en tus básicos",
    image: "https://http2.mlstatic.com/D_NQ_896974-MLA53885833186_022023-C.webp",
    image1024: "https://http2.mlstatic.com/D_NQ_860085-MLA53885733545_022023-C.webp"
  },
  {
    title: "renová tu baño",
    text1: "hasta 30% off",
    text2: "¡aprovechá!",
    image: "https://http2.mlstatic.com/D_NQ_716561-MLA53885733978_022023-C.webp",
    image1024: "https://http2.mlstatic.com/D_NQ_748487-MLA53885733981_022023-C.webp"
  },
  {
    title: "mundo gamer",
    text1: "hasta 20% off",
    text2: "y 12 cuotas fijas",
    image: "https://http2.mlstatic.com/D_NQ_812647-MLA53885743962_022023-C.webp",
    image1024: "https://http2.mlstatic.com/D_NQ_927353-MLA53885833641_022023-C.webp"
  },
  {
    title: "cupón neumáticos",
    text1: "hasta 25% off",
    text2: "+ 10% off extra",
    image: "https://http2.mlstatic.com/D_NQ_718859-MLA53886094078_022023-C.webp",
    image1024: "https://http2.mlstatic.com/D_NQ_768208-MLA53886007325_022023-C.webp"
  }
]

function Advertising({ title, text1, text2, image, image1024 }) {
  return (
    <div className="advertising">
      <div className="advertisingInfo">
        <span className="advertisingTitle">{title}</span>
        <span className="advertisingText">{text1}</span>
        <span className="advertisingText">{text2}</span>
        <button className="advertisingButton">Ver más</button>
      </div>
      <div className="advertisingImage">
        <picture>
          <source media="(max-width:1024px)" srcSet={image1024}/>
          <img src={image} alt={title} />
        </picture>
      </div>
    </div>
  )
}

export default Advertising