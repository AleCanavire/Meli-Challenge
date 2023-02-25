import React, { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { GetProducts, useQuestions, useOpinions } from '../../hooks/utilities';
import questions, { opinions } from '../../data/questionsAndOpinions';
import CarouselImages from '../../components/ReactSlick/CarouselImages';
import ItemCount from './components/ItemCount/ItemCount';
import CarouselItems from '../../components/ReactSlick/CarouselItems';
import SellerItem from './components/SellerItem/SellerItem';
import Opinion from './components/Opinion/Opinion';

function ResponsiveDetail({ product, price, quota, solds }) {

  // ========== Cart ==========
  const { addToCart } = useContext(cartContext);
  
  function onAddToCart(count){
    addToCart(product, count)
  }

  // ===== Productos del vendedor ===== 
  const products = GetProducts();

  // ========== PREGUNTAS ==========
  const {
    yourQuestions,
    onSubmit,
    newQuestion,
    onInputChange
  } = useQuestions();

  // ========== OPINIONES ==========
  const {
    toggle,
    setToggle,
    reviews,
    filterStars,
    allReviews
  } = useOpinions(opinions);

  // ===== Texto Ver mas Opiniones =====
  const [isHidden, setIsHidden] = useState(true);

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
          <CarouselImages images={product.image || product.pictures}/>
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
          <CarouselItems number={3}>
            { products &&
              products.map(product => {
              return(
                <SellerItem
                key={product.id}
                product={product}/>
              )})
            }
          </CarouselItems>
        </div>
        <span className='footerText'>Ver más publicaciones del vendedor</span>
      </div>
      <div className="sellerInfoContainer">
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
      {product.attributes &&
      <>
      <div className="techSpecs">
        <h2>Características principales</h2>
        <div className="table">
          <table>
            <tbody>
              { [1,3,4,5,7,10,14].map((row)=>{
                return(
                  <tr key={row}>
                    <th>{product.attributes[row].name}</th>
                    <td>{product.attributes[row].value_name}</td>
                  </tr>
                )})
              }
            </tbody>
          </table>  
        </div>
        <p className="moreTechs">Ver más características</p>
      </div>
      </>
      }
      <div className="description">
        <h2>Descripción</h2>
        <p>{product.description.replaceAll("\\n", "\n")}</p>
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
              <img src="/img/mastercard-credito.svg" alt="" />
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
      <div className="questionsContainer">
        <h2>Preguntas y respuestas</h2>
        <div className="buttons">
          <h3>¿Qué querés saber?</h3>
          <button>Costo y tiempo de envío</button>
          <button>Devoluciones gratis</button>
          <button>Medios de pago y promociones</button>
          <button>Garantía</button>
        </div>
        <div className="yourQuestion">
          <h3>Preguntale al vendedor</h3>
          <form className='form' onSubmit={onSubmit}>
            <textarea type="text" placeholder="Escribí tu pregunta..." onChange={onInputChange}></textarea>
            <button type='submit' onClick={newQuestion}>Preguntar</button>
          </form>
        </div>
        { yourQuestions.length !== 0 &&
          <div className="yoursQuestions">
            <h3>Tus preguntas</h3>
            { yourQuestions.map((question, index)=>{
              return(
                <div className="question" key={index}>
                  <p>{question.question}</p>
                </div>
              )})
            }
          </div>
        }
        <div className="lastQuestions">
          <h3>Últimas realizadas</h3>
          { questions.map((question, index)=>{
            return(
            <div className="oneQuestion" key={index}>
              <div className="question">
                <p>{question.question}<a href='./'>Denunciar</a></p>
              </div>
              <div className="answer">
                <p>{question.answer}
                  <span>21/01/2023</span>
                  <a href='./'>Denunciar</a>
                </p>
              </div>
            </div>
            )})
          }
          <div className="allQuestions">Ver todas las preguntas</div>
        </div>
        <div className="opinions">
          <h2>Opiniones sobre {product.title}</h2>
          <div className="reviews">
            <div className="scoreItem">
              <div className="score">
                <span>{product.rate}</span>
                <div className="reviewsRating">
                  <div className="rate">
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
                  </div>
                  <p>12 calificaciones</p>
                </div>
              </div>
              <div className="ratingBars">
                <ul>
                  { [1,2,3,4,5].reverse().map((star) => {
                    const numStars = opinions.filter(opinion => opinion.rate === star);
                    const barWith = (numStars.length / opinions.length) * 100;
                    return(
                      <li id={`rateBar${star}`} key={star}>
                        <div className="bar"><span style={{width: `${barWith}%`}}></span></div>
                        <div className="level">
                          <span>{star}</span>
                          <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                          </svg>
                        </div>
                      </li>  
                    )})
                  }
                </ul>
              </div>
            </div>
            <div className="reviewsFilter">
              <div className="filterButtons">
                <button onClick={()=> setToggle({...toggle, button1: !toggle.button1})}>
                  <span>
                    Ordenar<div className='arrowIcon'></div>
                  </span>
                  { toggle.button1 &&
                    <div className="optionsMenu">
                      <ul>
                        <li>Más útiles</li>
                        <li>Más recientes</li>
                      </ul>
                    </div>
                  }
                </button>
                <button onClick={()=> setToggle({...toggle, button2: !toggle.button2})}>
                  <span>
                    Calificación<div className='arrowIcon'></div>
                  </span>
                  { toggle.button2 &&
                    <div className="optionsMenu">
                      <ul>
                        <li onClick={allReviews}>Todas</li>
                        { [5,4,3,2,1].map((star, index) => {
                          return(
                            <li key={index} onClick={()=>filterStars(star)}>{star}
                              <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="12 19.5 4.6 23.4 6 15.1 0 9.3 8.3 8.1 12 0.6 15.7 8.1 24 9.3 18 15.1 19.4 23.4"/>
                              </svg>  
                            </li>
                          )})
                        }  
                      </ul>
                    </div>  
                  }
                </button>
              </div>
              <div className={`reviewsComments${ isHidden ? "" :  " reviewsVisibles"}`}>
                { reviews.map((opinion)=>{
                  return(
                    <Opinion
                      key={opinion.id}
                      rate={opinion.rate}
                      comment={opinion.comment}
                      likes={opinion.likes}
                    />
                  )})
                }
              </div>
              <span className="moreOpinions" onClick={()=>setIsHidden(!isHidden)}>
                {isHidden ? "Mostrar todas las opiniones" : "Ver menos opiniones"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveDetail;