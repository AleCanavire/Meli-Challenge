import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { useState } from 'react';

function NavBar() {
  const [shadowActive, setShadow] = useState(false);
  
  function shadowEffect() {
    setShadow(!shadowActive)
  }

  return (
    <>
      <nav className='nav'>
        <div className='navContainer'>
          <Link to="/">
            <div className='meliLogo'></div>
          </Link>
          <div className='location'>
            <img src='/img/location.svg' alt='location icon'></img>
            <div className='envio'>
              <span>Enviar a</span>
              <p>Capital Federal</p>
            </div>
          </div>
          <div className='search'>
            <form>
              <input placeholder='Buscar productos, marcas y más...'></input>
              <button>
                <img src='/img/search.svg' alt='search icon'></img>
              </button>
            </form>
          </div>
          <div className='categories'>
            <ul>
              <li onMouseEnter={shadowEffect} onMouseLeave={shadowEffect}>
                <span>Categorías</span>
                <div className='allCategories'>
                  <a href='#'>Vehículos</a>
                  <a href='#'>Inmuebles</a>
                  <a href='#'>Supermercado</a>
                  <Link to='/category/tecnología'>Tecnología</Link>
                  <Link to='/category/joyería'>Joyeria</Link>
                  <Link to='/category/ropa-hombre'>Ropa de Hombre</Link>
                  <Link to='/category/ropa-mujer'>Ropa de Mujer</Link>
                  <a href='#'>Herramientas</a>
                  <a href='#'>Construcción</a>
                  <a href='#'>Deportes y Fitness</a>
                  <a href='#'>Accesorios para Vehiculos</a>
                  <a href='#'>Moda</a>
                  <a href='#'>Juegos y Juguetes</a>
                  <a href='#'>Bebés</a>
                  <a href='#'>Belleza y Cuidado Personal</a>
                  <a href='#'>Salud y Equipamento Médico</a>
                  <a href='#'>Industrias y Oficinas</a>
                  <a href='#'>Productos Sustentables</a>
                  <a href='#'>Servicios</a>
                  <a href='#'>Más Vendidos</a>
                  <a href='#'>Tiendas oficiales</a>
                  <a href='#'>Ver más categorias</a>
                </div>
              </li>
              <li><span>Ofertas</span></li>
              <li><span>Historial</span></li>
              <li><span>Supermercado</span></li>
              <li><span>Moda</span></li>
              <li><span>Vender</span></li>
              <li><span>Ayuda</span></li>
            </ul>
          </div>
          <img className='disney' src='/img/disneyStar.webp' alt='disney icon'></img>
          <div className='account'>
            <ul>
              <li className='accountOptions'><span>Creá  tu cuenta</span></li>
              <li className='accountOptions'><span>Ingresá</span></li>
              <li className='accountOptions'><span>Mis compras</span></li>
              <li className='burgerButton'><span></span></li>
              <li className='cartButton'><CartWidget/></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`shadow ${shadowActive ? "shadowActive" : ""}`}></div>
    </>
    )
}

export default NavBar;