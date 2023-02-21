import React,{ useContext } from 'react';
import { cartContext} from '../../context/cartContext';
import ItemCount from './components/ItemCount/ItemCount';

function ItemColumnRight({ product, price, quota, solds }) {
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count){
    addToCart(product, count)
  }

  return (
    <div className='columnRight'>
      <div className='infoProduct borderRow'>
        <div className='productHeader'>
          <span>{`Nuevo  |  ${solds || product.sold_quantity} vendidos`}</span>
          <h1>{product.title}</h1>
          <svg enableBackground="new 0 0 36 32.3" version="1.1" viewBox="0 0 36 32.3" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m27.6 0.5c-3.5-1-6.8-0.2-9.5 2.1l-0.1 0.1-0.1-0.1c-2-1.7-4.2-2.5-6.6-2.5-1 0-2 0.1-3 0.4-4 1.1-6.5 3.9-7.4 8-0.5 2.5-0.2 5 0.9 7.9 1 2.5 2.7 4.8 5.2 7.2 2.3 2.2 4.9 4 7.3 5.7 1.1 0.7 2 1.4 2.9 2.1l0.8 0.7 0.8-0.7c0.9-0.8 1.8-1.4 2.9-2.2 2.5-1.7 5.1-3.5 7.3-5.7 2.5-2.4 4.2-4.7 5.2-7.2 1.2-2.8 1.5-5.4 0.9-7.9-1-4-3.5-6.7-7.5-7.9zm4.3 15c-0.9 2.2-2.4 4.2-4.6 6.3-2.2 2-4.7 3.8-7.1 5.5-0.7 0.5-1.5 1-2.2 1.6v0.1l-0.1-0.1c-0.7-0.6-1.5-1.1-2.2-1.6-2.4-1.7-4.9-3.4-7.1-5.4-2.3-2.1-3.7-4.1-4.6-6.3-1-2.4-1.2-4.5-0.8-6.4 0.7-3.3 2.7-5.4 5.8-6.3 3-0.9 5.8-0.1 8.1 2.3l0.9 0.9 0.8-0.9c2.3-2.4 5.1-3.2 8.2-2.4 3.1 0.9 5.1 3 5.8 6.3 0.4 2 0.1 4.1-0.9 6.4z"/>
          </svg>
        </div>
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
      </div>
      <div className="sellerInfoContainer borderRow">
        <h2>Información sobre el vendedor</h2>
        <div className="sellerInfo">
          <div className="ubicationAndMercadoLider">
            <div className="icon">
              <img src='/img/ubication.svg' alt="icon"></img>
            </div>
            <div className="text">
              <p>Ubicación</p>
              <p>Villa Pueyrredón, Capital Federal</p>
            </div>
          </div>
          <div className="ubicationAndMercadoLider">
            <div className="icon">
              <img src='/img/mercadoLider.svg' alt="icon"></img>
            </div>
            <div className="text">
              <p>MercadoLíder Platinum</p>
              <p>¡Es uno de los mejores del sitio!</p>
            </div>
          </div>
          <ul className="thermometer">
            <li className='thermometerLevel'></li>
            <li className='thermometerLevel'></li>
            <li className='thermometerLevel'></li>
            <li className='thermometerLevel'></li>
            <li className='thermometerLevel'></li>
          </ul>
          <div className="sellerReputation">
            <ul>
              <li className='reputationItem'>
                <span>+10mil</span>
                <p>Ventas en los últimos 60 días</p>
              </li>
              <li className='reputationItem'>
                <span><img src='/img/messagePositive.svg' alt="" /></span>
                <p>Brinda buena atención</p>
              </li>
              <li className='reputationItem'>
                <span><img src='/img/timePositive.svg' alt="" /></span>
                <p>Despacha sus productos a tiempo</p>
              </li>
            </ul>
            <p className="moreInfoSeller">Ver más datos de este vendedor</p>
          </div>
        </div>
      </div>
      <div className="listContent borderRow">
        <div className="freeReturn">
          <h2>Devolución gratis</h2>
          <p>Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</p>
          <span>Conocer más sobre devoluciones</span>
        </div>
        <div className="warranty">
          <h2>Garantía</h2>
          <div className="protectedbuy">
            <h3>Compra Protegida con Mercado Pago</h3>
            <p>Recibí el producto que esperabas o te devolvemos tu dinero</p>
          </div>
          <div className="warrantySeller">
            <h3>Garantía del vendedor</h3>
            <p>Sin garantía</p>
          </div>
          <span>Conocer más sobre garantía</span>
        </div>
        <div className="paymentMethods">
          <h2>Medios de pago</h2>
          <div className="mercadoCredito">
            <p>Hasta 12 cuotas sin tarjeta</p>
            <div className="payment">
              <img src="/img/mercado-credito.svg" alt="" />
            </div>
          </div>
          <div className="creditCards">
            <p>Tarjetas de crédito</p>
            <div className="payment">
              <img src="/img/visa-credito.svg" alt="" />
              <img src="/img/american.svg" alt="" />
              <img src="/img/naranja.svg" alt="" />
              <img src="/img/mastercard.svg" alt="" />
            </div>
          </div>
          <div className="debitCards">
            <p>Tarjetas de débito</p>
            <div className="payment">
              <img src="/img/visa-debito.svg" alt="" />
              <img src="/img/maestro.svg" alt="" />
              <img src="/img/mastercard-debito.svg" alt="" />
              <img src="/img/cabal.svg" alt="" />
            </div>
          </div>
          <div className="cash">
            <p>Efectivo</p>
            <div className="payment">
              <img src="/img/pagofacil.svg" alt="" />
              <img src="/img/rapipago.svg" alt="" />
            </div>
          </div>
          <span className="moreMethods">Conocé otros medios de pago</span>
        </div>
      </div>
    </div>
  )
}

export default ItemColumnRight