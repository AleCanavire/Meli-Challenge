import React, { useState } from 'react'

function Opinion({ rate, comment, likes }) {

  const [likesOpinion, setLikeOpinion] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);  

  const likeOpinion = () => {
    if (likesOpinion === likes) {
      setLikeOpinion(likesOpinion + 1);
    } else {
      setLikeOpinion(likesOpinion - 1);
    }
    setIsLiked(!isLiked);
  }

  return (
    <>
      <article className='reviewComment'>
        <div className="rateAndDate">
          <div className="rate">
            <div className='stars'>
              { [1,2,3,4,5].slice(0, rate).map((star) => {
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
        <p className='comment'>{comment}</p>
        <div className="buttonsAndDenounce">
          <div className="valorizationButtons">
            <button className={isLiked ? " liked" : "likeButton"} onClick={likeOpinion}>
              <span className="contentButton">
                { !isLiked && <span>Es útil</span> }
                { isLiked
                  ? <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25811 5.07832L5.02406 5.54732L5.12152 13.4921L6.36114 13.4769L9.91485 14.0834C11.9108 14.424 13.8656 13.2921 14.5638 11.3915L15.5672 8.6645C16.1201 7.16179 14.9959 5.57117 13.3948 5.59081L10.0365 5.63201L10.656 3.73357C11.1722 2.15138 10.2446 0.462057 8.63253 0.0485436L6.25811 5.07832Z" fill="white"></path><path d="M3.93633 14.7066L3.81121 4.50736L0.862071 4.54354L0.987192 14.7428L3.93633 14.7066Z" fill="white"></path></svg>
                  : <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.02125 6.25775L5.87824 5.91279L8.37994 0.751802L9.40301 1.24803C10.7777 1.91481 11.4317 3.50825 10.9218 4.94852L10.6452 5.72977L13.4447 5.69542C13.737 5.69184 14.0274 5.74166 14.3018 5.84245C15.546 6.29952 16.184 7.67866 15.727 8.92284L14.5609 12.0968C13.8627 13.9974 11.9079 15.1293 9.91198 14.7887L6.35827 14.1822L5.11866 14.1974L5.13337 15.3972L0.984325 15.4481L0.859204 5.24885L5.00825 5.19795L5.02125 6.25775ZM6.75603 6.85303L8.93573 2.3563C9.72188 2.77187 10.0895 3.7038 9.79057 4.54802L8.93988 6.95078L13.4594 6.89533C13.6056 6.89354 13.7508 6.91845 13.888 6.96885C14.5101 7.19738 14.8291 7.88695 14.6006 8.50904L13.4345 11.683C12.9358 13.0406 11.5395 13.8491 10.1139 13.6058L6.50639 12.9901L6.39809 12.9816L5.10394 12.9975L5.03705 7.54496L6.75603 6.85303ZM3.91858 14.212L2.16951 14.2334L2.07383 6.43404L3.82306 6.41258L3.91858 14.212Z" fill="currentColor"></path></svg>
                }
                <p>{likesOpinion}</p>
              </span>
            </button>
            <button className="dislikeButton">
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
    </>
  )
}

export default Opinion