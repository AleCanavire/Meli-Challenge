import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useResize } from '../../hooks/utilities';
import CartWidget from './components/CartWidget/CartWidget';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ReactComponent as LocationIcon } from '../../assets/img/location.svg';

function NavBar() {
  const [shadowActive, setShadow] = useState(false);
  
  function shadowEffect(state) {
    setShadow(state)
  }

  const searchText = useResize(1024)
  ? "Buscar productos, marcas y más..."
  : "Estoy buscando..."

  return (
    <>
      <nav className='nav'>
        <div className='navContainer'>
          <Link to="/">
            <div className='meliLogo'></div>
          </Link>
          <div className='location'>
            <LocationIcon/>
            <div className='envio'>
              <span>Enviar a</span>
              <p>Capital Federal</p>
            </div>
            { !useResize(1024) && <ThemeToggle/> }
          </div>
          <div className='search'>
            <form>
              <input placeholder={searchText}></input>
              <button>
                <img src='/img/search.svg' alt='search icon'></img>
              </button>
            </form>
          </div>
          { useResize(1024) &&
            <div className='categories'>
              <ul>
                <li onMouseOver={()=>shadowEffect(true)} onMouseOut={()=>shadowEffect(false)}>
                  <span>Categorías</span>
                  { shadowActive &&
                    <div className="allCategories">
                      <div className="allCategoriesContent">
                        <span>Vehículos</span>
                        <span>Inmuebles</span>
                        <span>Supermercado</span>
                        <Link to='/category/tecnología'>Tecnología</Link>
                        <Link to='/category/joyería'>Joyeria</Link>
                        <Link to='/category/ropa-hombre'>Ropa de Hombre</Link>
                        <Link to='/category/ropa-mujer'>Ropa de Mujer</Link>
                        <span>Herramientas</span>
                        <span>Construcción</span>
                        <span>Deportes y Fitness</span>
                        <span>Accesorios para Vehiculos</span>
                        <span>Moda</span>
                        <span>Juegos y Juguetes</span>
                        <span>Bebés</span>
                        <span>Belleza y Cuidado Personal</span>
                        <span>Salud y Equipamento Médico</span>
                        <span>Industrias y Oficinas</span>
                        <span>Productos Sustentables</span>
                        <span>Servicios</span>
                        <span>Más Vendidos</span>
                        <span>Tiendas oficiales</span>
                        <span>Ver más categorias</span>
                      </div>
                    </div>
                  }
                </li>
                <li><span>Ofertas</span></li>
                <li><span>Historial</span></li>
                <li><span>Supermercado</span></li>
                <li><span>Moda</span></li>
                <li><span>Vender</span></li>
                <li><span>Ayuda</span></li>
              </ul>
              <ThemeToggle/>
            </div>
          }
          { useResize(1024) && <div className='disney'></div> }
          <div className='account'>
            <ul>
              { useResize(1024)
              ? <>
                <li className='accountOptions'><span>Creá  tu cuenta</span></li>
                <li className='accountOptions'><span>Ingresá</span></li>
                <li className='accountOptions'><span>Mis compras</span></li>
                </>
              : <li className='burgerButton'><span></span></li>
              }
              <li className='cartButton'><CartWidget/></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`shadow${shadowActive ? " shadowActive" : ""}`}></div>
    </>
  )
}

export default NavBar;