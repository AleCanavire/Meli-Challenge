import { useState, useEffect, useContext } from 'react';
import { cartContext} from '../../context/cartContext';
import getItems from "../../services/firestore";
import ItemCount from './ItemCount';
import CarouselItems from '../ReactSlick/CarouselItems';
import returnIcon from '../../assets/img/return.svg';
import shippingIcon from '../../assets/img/shipping.svg';
import protectedIcon from '../../assets/img/protected.svg';
import mercadoPoints from '../../assets/img/mercadoPoints.svg';
import garantiaIcon from '../../assets/img/garantia.svg';

function ItemDetail({ product }) {
  const [products, setProducts] = useState(null);

  async function getItemsAsync() {
    const response = await getItems();
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);
  
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count){
    addToCart(product, count)
  }

  // precio
  const num = product.price < 1000 ? Math.trunc(product.price * 160) : product.price;
  
  const price = num.toLocaleString('es-AR');
  // cuotas
  const quota = Math.trunc(num / 6).toLocaleString('es-AR');

  // sold
  const solds = Math.trunc(product.count * 2.3);

  // stars
  let stars = [];
  for (let i = 1; i <= product.rate; i++) {
    stars.push(i)
  }
  let greyStars = [1, 2, 3, 4, 5];

  return (
    <div className='itemDetail'>
      <div className='columnLeft'>
        <div className='imgProductContainer'>
          <div className='imgProduct'>
            <div className='gallery'>
              <div className='preview'>
                <img src={product.image || product.pictures[0].url} alt={product.title}></img>
              </div>
            </div>
            <div className='focusImg'>
              <img src={product.image || product.pictures[0].url} alt={product.title}></img>
            </div>
          </div>
        </div>
        <div className='sellerProducts'>
          <h2>Publicaciones del vendedor</h2>
          <div className="sellerItems">
            { <CarouselItems products={products}/> }
          </div>
          <span className='footerText'>Ver más publicaciones del vendedor</span>
        </div>
        
        {product.attributes &&
        <>
          <div className="techSpecs">
            <h2>Características principales</h2>
            <div className="table">
              <table>
                <tbody>
                  <tr>
                    <th>{product.attributes[1].name}</th>
                    <td>{product.attributes[1].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[3].name}</th>
                    <td>{product.attributes[3].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[4].name}</th>
                    <td>{product.attributes[4].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[5].name}</th>
                    <td>{product.attributes[5].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[7].name}</th>
                    <td>{product.attributes[7].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[10].name}</th>
                    <td>{product.attributes[10].value_name}</td>
                  </tr>
                  <tr>
                    <th>{product.attributes[14].name}</th>
                    <td>{product.attributes[14].value_name}</td>
                  </tr>
                </tbody>
              </table>  
            </div>
            <div className="otherSpecs">
              <h3>Otras características</h3>
              <div className="specsList">
                <ul>
                  <li><p><b>{product.attributes[0].name}:</b> {product.attributes[0].value_name}</p></li>
                  <li><p><b>{product.attributes[2].name}:</b> {product.attributes[2].value_name}</p></li>
                  <li><p><b>{product.attributes[6].name}:</b> {product.attributes[6].value_name}</p></li>
                  <li><p><b>{product.attributes[8].name}:</b> {product.attributes[8].value_name}</p></li>
                  <li><p><b>{product.attributes[9].name}:</b> {product.attributes[9].value_name}</p></li>
                  <li><p><b>{product.attributes[11].name}:</b> {product.attributes[11].value_name}</p></li>
                  <li><p><b>{product.attributes[12].name}:</b> {product.attributes[12].value_name}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </>
        }
        <div className="description">
          <h2>Descripción</h2>
          <p>{product.description.replaceAll("\\n", "\n")}</p>
        </div>
      </div>

      <div className='columnRight'>
        <div className='infoProduct'>
          <div className='productHeader'>
            <span>{`Nuevo  |  ${solds || product.sold_quantity} vendidos`}</span>
            <h1>{product.title}</h1>
            <svg enableBackground="new 0 0 36 32.3" version="1.1" viewBox="0 0 36 32.3" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="m27.6 0.5c-3.5-1-6.8-0.2-9.5 2.1l-0.1 0.1-0.1-0.1c-2-1.7-4.2-2.5-6.6-2.5-1 0-2 0.1-3 0.4-4 1.1-6.5 3.9-7.4 8-0.5 2.5-0.2 5 0.9 7.9 1 2.5 2.7 4.8 5.2 7.2 2.3 2.2 4.9 4 7.3 5.7 1.1 0.7 2 1.4 2.9 2.1l0.8 0.7 0.8-0.7c0.9-0.8 1.8-1.4 2.9-2.2 2.5-1.7 5.1-3.5 7.3-5.7 2.5-2.4 4.2-4.7 5.2-7.2 1.2-2.8 1.5-5.4 0.9-7.9-1-4-3.5-6.7-7.5-7.9zm4.3 15c-0.9 2.2-2.4 4.2-4.6 6.3-2.2 2-4.7 3.8-7.1 5.5-0.7 0.5-1.5 1-2.2 1.6v0.1l-0.1-0.1c-0.7-0.6-1.5-1.1-2.2-1.6-2.4-1.7-4.9-3.4-7.1-5.4-2.3-2.1-3.7-4.1-4.6-6.3-1-2.4-1.2-4.5-0.8-6.4 0.7-3.3 2.7-5.4 5.8-6.3 3-0.9 5.8-0.1 8.1 2.3l0.9 0.9 0.8-0.9c2.3-2.4 5.1-3.2 8.2-2.4 3.1 0.9 5.1 3 5.8 6.3 0.4 2 0.1 4.1-0.9 6.4z"/>
            </svg>
          </div>
          <div className='rate'>
            <div className='stars'>
              {
                stars.map((star) => {
                  return(
                    <svg key={star} enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                    </svg>
                  )
                })
              }  
            </div>
            <div className='greyStars'>
              {
                greyStars.map((star) => {
                  return(
                    <svg key={star} enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                    </svg>
                  )
                })
              } 
            </div>
            <span>{`(${product.count || product.initial_quantity})`}</span>
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
              <img src={shippingIcon}></img>
            </div>
            <div className='textIcon'>
              <p>Llega <b>mañana</b></p>
              <div>Ver más formas de entrega</div>
            </div>
          </div>
          <div className='shippingAndReturn'>
            <div className='iconReturn'>
              <img src={returnIcon}></img>
            </div>
            <div className='textIcon'>
              <p>Devolución gratis</p>
              <p>Tenés 30 días desde que lo recibís.</p>
              <div>Conocer más</div>
            </div>
          </div>
          <ItemCount
            onAddToCart={onAddToCart}
            stock={10}
          />
          <ul className='benefits'>
            <li>
              <img src={protectedIcon}></img>
              <p><span>Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
            </li>
            <li>
              <img src={mercadoPoints}></img>
              <p><span>Mercado Puntos</span>. Sumás 14 puntos.</p>
            </li>
            <li>
              <img src={garantiaIcon}></img>
              <p>2 días de garantía de fábrica.</p>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail