import React,{useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import getItems from "../../services/firestore";
import ItemCount from './ItemCount';
import CarouselItems from '../ReactSlick/CarouselItems';

function ResponsiveDetail({ product }) {
  // Vendidos
  const solds = Math.trunc(product.count * 2.3);

  // ===== SELECCIONAR IMAGEN =====
  // Cambiar Imagen
  const [focusImg, setFocusImg] = useState("");
  const [stylePreview, setStylePreview] = useState({
    imageSelected: null,
    objects: [{id:1}, {id:2}, {id:3}, {id:4}]
  });
  // Setear la imagen seleccionada
  function imageActive(index){
    setStylePreview({...stylePreview, imageSelected: stylePreview.objects[index]})
  }
  // Agrega el css a la imagen seleccionada
  function imageStyled(index){
    if (stylePreview.objects[index] === stylePreview.imageSelected) {
      return "selected"
    } return ""
  }
  // Cambia la Imagen Principal
  function changeImage(imageUrl){
    setFocusImg(imageUrl)
  }
  // Resetear imagen al cambiar de producto
  const { id } = useParams();
  useEffect(() => {
    setFocusImg("");
    setStylePreview(state =>({...state, imageSelected: state.objects[0]}))
  }, [id]);

  // Precio
  const num = product.price < 1000 ? Math.trunc(product.price * 160) : product.price;
  const price = num.toLocaleString('es-AR');

  // Cuotas
  const quota = Math.trunc(num / 6).toLocaleString('es-AR');

  // Cart
  const { addToCart } = useContext(cartContext);
  
  function onAddToCart(count){
    addToCart(product, count)
  }

  // Productos del vendedor
  const [products, setProducts] = useState(null);

  async function getItemsAsync() {
    const response = await getItems();
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <>
      <div className='productHeader'>
        <div className="soldsAndRate">
          <span>{`Nuevo  |  ${solds || product.sold_quantity} vendidos`}</span>
          <div className='rate'>
            <div className='stars'>
              { [1,2,3,4,5].slice(0, product.rate).map((star) => {
                return(
                  <svg key={star} enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                  </svg>
                )})
              }  
            </div>
            <div className='greyStars'>
              { [1,2,3,4,5].map((star) => {
                return(
                  <svg key={star} enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                  </svg>
                )})
              }
            </div>
            <span>{`(${product.count || product.initial_quantity})`}</span>
          </div>
        </div>
        <h1>{product.title}</h1>
      </div>
      <div className='imgProductContainer'>
        <div className='imgProduct'>
          <div className='gallery'>
            { product.image
              ? <div className="preview selected">
                  <img src={product.image} alt={product.title}></img>
                </div>
              : product.pictures.map((img, index)=>{
                return(
                  <div
                    className={`preview ${imageStyled(index)}`}
                    onClick={()=> {changeImage(img.url); imageActive(index)}} key={index}>
                    <img src={img.url} alt={product.title}></img>
                  </div>
                )
              })
            }
          </div>
          <div className='focusImg'>
            <img src={focusImg === ""
            ? product.image || product.pictures[0].url
            : focusImg} alt={product.title}/>
          </div>
        </div>
      </div>
      <div className='productPrice'>
        <div className='itemPrice'>
          <span className='priceSimbol'>$</span>
          <span className='price'>{price}</span>
        </div>
        <div className='quotas'>
          <p>
            <span>en </span>6x
            <span className='priceSimbol'> $ </span>
            <span className='price'>{quota}</span>
          </p>
        </div>
        <p className='payment'>Ver los medios de pago</p>
      </div>
      <div className='shippingAndReturn'>
        <div className='iconShipping'>
          <img src='/img/shipping.svg' alt="icon"></img>
        </div>
        <div className='textIcon'>
          <p>Llega <b>mañana</b></p>
          <div>Ver más formas de entrega</div>
        </div>
      </div>
      <div className='shippingAndReturn'>
        <div className='iconReturn'>
          <img src='/img/return.svg' alt="icon"></img>
        </div>
        <div className='textIcon'>
          <p>Devolución gratis</p>
          <p>Tenés 30 días desde que lo recibís.</p>
          <div>Conocer más</div>
        </div>
      </div>
      <ItemCount onAddToCart={onAddToCart} stock={10}/>
      <ul className='benefits'>
        <li>
          <img src='/img/protected.svg' alt="icon"></img>
          <p><span>Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
        </li>
        <li>
          <img src='/img/mercadoPoints.svg' alt="icon"></img>
          <p><span>Mercado Puntos</span>. Sumás 14 puntos.</p>
        </li>
        <li>
          <img src='/img/garantia.svg' alt="icon"></img>
          <p>1 año de garantía de fábrica.</p>
        </li>  
      </ul>
      <div className='sellerProducts'>
        <h2>Publicaciones del vendedor</h2>
        <div className="sellerItems">
          <CarouselItems products={products}/>
        </div>
        <span className='footerText'>Ver más publicaciones del vendedor</span>
      </div>
    </>
  )
}

export default ResponsiveDetail;