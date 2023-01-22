import React, {useState} from 'react'

function FormOrder(props) {
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
        <input name='phone' type='tel' maxLength='10' required onChange={onInputChange}/>
      </div>
      <div className='buyNow'>
        <button
        disabled={(data.name === "" || data.phone === "" || data.email === "")}
        type='submit'>
          Finalizar compra
        </button>
      </div>
    </form>
  )
}

export default FormOrder
