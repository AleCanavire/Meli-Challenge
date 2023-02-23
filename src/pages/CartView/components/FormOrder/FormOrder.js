import React, {useState, useContext} from 'react'
import { cartContext } from '../../../../context/cartContext';
import { scrollToTop } from '../../../../hooks/utilities';

function FormOrder(props) {

  const myContext = useContext(cartContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
    scrollToTop();
    myContext.clearCart();
  }

  function filterNumbers(evt) {
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    if (evt.key === "Backspace") return;
      
    if (!numbers.some( number => evt.key.includes(number) )) {
      evt.preventDefault();
    }
  }
  return (
    <form className='formOrder' onSubmit={onSubmit}>
      <div className='inputBox'>
        <label htmlFor='name'>Nombre</label>
        <input name='name' type='text' required onChange={onInputChange}/>
      </div>
      <div className='inputBox'>
        <label htmlFor='email'>Email</label>
        <input name='email' type='email' required onChange={onInputChange}/>
      </div>
      <div className='inputBox'>
        <label htmlFor='tel'>Teléfono</label>
        <input name='phone' type='tel' minLength='10' maxLength='10'
        size='10' required onChange={onInputChange} onKeyDown={filterNumbers}/>
      </div>
      <div className='buyNow'>
        <button
        disabled={(data.name === "" || data.phone === "" || data.phone.length !== 10 || data.email === "")}
        type='submit'>
          Finalizar compra
        </button>
      </div>
    </form>
  )
}

export default FormOrder
