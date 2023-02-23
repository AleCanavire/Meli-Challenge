import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { GetProducts, useQuestions, useOpinions } from '../../hooks/utilities';
import questions, { opinions } from '../../data/questionsAndOpinions';
import CarouselImages from '../../components/ReactSlick/CarouselImages';
import ItemCount from './components/ItemCount/ItemCount';
import CarouselItems from '../../components/ReactSlick/CarouselItems';
import SellerItem from './components/SellerItem/SellerItem';

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
              <div className="reviewsComments">
                { reviews.slice(0, 3).map((opinion, index)=>{
                  return(
                    <React.Fragment key={index}>
                      <article className='reviewComment'>
                        <div className="rateAndDate">
                          <div className="rate">
                            <div className='stars'>
                              { [1,2,3,4,5].slice(0, opinion.rate).map((star) => {
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
                          <div className="date">25 ene 2023</div>
                        </div>
                        <p className='comment'>{opinion.comment}</p>
                        <div className="buttonsAndDenounce">
                          <div className="valorizationButtons">
                            <button>
                              <span className="likeButton">
                                <span>Es útil</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.02125 6.25775L5.87824 5.91279L8.37994 0.751802L9.40301 1.24803C10.7777 1.91481 11.4317 3.50825 10.9218 4.94852L10.6452 5.72977L13.4447 5.69542C13.737 5.69184 14.0274 5.74166 14.3018 5.84245C15.546 6.29952 16.184 7.67866 15.727 8.92284L14.5609 12.0968C13.8627 13.9974 11.9079 15.1293 9.91198 14.7887L6.35827 14.1822L5.11866 14.1974L5.13337 15.3972L0.984325 15.4481L0.859204 5.24885L5.00825 5.19795L5.02125 6.25775ZM6.75603 6.85303L8.93573 2.3563C9.72188 2.77187 10.0895 3.7038 9.79057 4.54802L8.93988 6.95078L13.4594 6.89533C13.6056 6.89354 13.7508 6.91845 13.888 6.96885C14.5101 7.19738 14.8291 7.88695 14.6006 8.50904L13.4345 11.683C12.9358 13.0406 11.5395 13.8491 10.1139 13.6058L6.50639 12.9901L6.39809 12.9816L5.10394 12.9975L5.03705 7.54496L6.75603 6.85303ZM3.91858 14.212L2.16951 14.2334L2.07383 6.43404L3.82306 6.41258L3.91858 14.212Z" fill="currentColor"></path></svg>
                                <p>{opinion.likes}</p>
                              </span>
                            </button>
                            <button>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.28509 9.57387L5.15029 9.89771L7.77783 14.9958L8.78843 14.4746C10.1464 13.7743 10.7611 12.1653 10.2159 10.738L9.92027 9.96373L12.7198 9.92939C13.0121 9.9258 13.3012 9.86887 13.573 9.76138C14.8056 9.27393 15.4097 7.87955 14.9222 6.64695L13.6787 3.50252C12.934 1.61963 10.952 0.536042 8.96507 0.925534L5.42731 1.61902L4.18769 1.63423L4.17298 0.434452L0.0239258 0.485352L0.149047 10.6846L4.2981 10.6337L4.28509 9.57387ZM6.00474 8.93622L8.2941 13.3781C9.06982 12.9434 9.41444 12.0027 9.09492 11.1661L8.18554 8.78492L12.7051 8.72948C12.8512 8.72768 12.9958 8.69921 13.1317 8.64547C13.748 8.40175 14.05 7.70456 13.8063 7.08826L12.5628 3.94383C12.0309 2.59891 10.6152 1.82491 9.19591 2.10312L5.60462 2.8071L5.49657 2.81826L4.20241 2.83414L4.2693 8.28666L6.00474 8.93622ZM2.98762 1.64908L1.23856 1.67054L1.33424 9.46994L3.08347 9.44848L2.98762 1.64908Z" fill="currentColor"></path></svg>
                            </button>
                          </div>
                          <button className="denounceButton">
                            <span></span>
                            <span></span>
                            <span></span>
                          </button>
                        </div>
                      </article>
                      <div className="divider"></div>
                    </React.Fragment>
                  )})
                }
                <p className="moreOpinions">Mostrar todas las opiniones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveDetail;