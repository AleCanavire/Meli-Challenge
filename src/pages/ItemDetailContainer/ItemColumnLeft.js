import React, { useState } from 'react';
import { GetProducts, useQuestions, useOpinions, useSelectImage } from '../../hooks/utilities';
import questions, { opinions } from '../../data/questionsAndOpinions';
import CarouselItems from '../../components/ReactSlick/CarouselItems';
import SellerItem from './components/SellerItem/SellerItem'
import Opinion from './components/Opinion/Opinion';

function ItemColumnLeft({ product }) {
  
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

  // ===== SELECCIONAR IMAGEN =====
  const {
    focusImg,
    imageActive,
    imageStyled,
    changeImage
  } = useSelectImage();

  // ===== Texto Ver mas Opiniones =====
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='columnLeft'>
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
          <div className="otherSpecs">
            <h3>Otras características</h3>
            <div className="specsList">
              <ul>
                { [0,2,6,8,9,11,12].map((item)=>{
                  return(
                    <li key={item}><p><b>{product.attributes[item].name}:</b> {product.attributes[item].value_name}</p></li>
                  )})
                }
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
            <input type="text" placeholder="Escribí tu pregunta..." onChange={onInputChange}></input>
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
                <p>{question.question}<span className="denounce">Denunciar</span></p>
              </div>
              <div className="answer">
                <p>{question.answer}
                  <span>21/01/2023</span>
                  <span className="denounce">Denunciar</span>
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
    </div>
  )
}

export default ItemColumnLeft