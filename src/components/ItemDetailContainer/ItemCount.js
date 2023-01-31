import { useState } from 'react';

function ItemCount({stock, onAddToCart}) {
  const [count, setCount] = useState(1);

  const [toggle, setToggle] = useState(false);

  const [isActive, setActive] = useState(false);

  function handleQuantity(quantity) {
    setCount(quantity);
  }

  return (
    <div className='cart'>
      <div className="stockInformation">Stock disponible</div>
      <div className='quantityButton'>
        <button className='quantitySelector' onClick={() => {setToggle(!toggle); setActive(!isActive)}}>
          <span className='buttonContent'>
            <span className='quantity'>Cantidad:</span>
            <span className='count'>{count} {count>1 ? "unidades" : "unidad"}</span>
            <div className={`arrowIcon ${isActive ? 'activeList' : ""}`}><span></span></div>
            <span className='quantityAvariable'>{`(${stock} disponibles)`}</span>
          </span>
        </button>
        { toggle &&
          <div className="listQuantity">
            <ul>
              {
                [1,2,3,4,5,6].map((quantity)=>{
                return(
                  <li key={quantity} onClick={()=>{handleQuantity(quantity); setToggle(!toggle)}}>
                    {quantity} {quantity>1 ? "unidades" : "unidad"}
                  </li>
                )})
              }
              <li key={7}>Más de 6 unidades</li>
            </ul>
          </div>
        }
      </div>
      <div className='buttons'>
        <button className='buyNow'>Comprar ahora</button>
        <button onClick={() => onAddToCart(count)} className='addCart'>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;