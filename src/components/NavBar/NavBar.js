import CartWidget from '../CartWidget/CartWidget';
import meliLogo from "../../assets/img/meliLogo.png";
import location from "../../assets/img/location.svg";
import search from "../../assets/img/search.svg";
import disney from "../../assets/img/disneyStar.webp";
import { Link } from "react-router-dom";

function NavBar() {
  const shadowOver = () => {
    const shadow = document.querySelector('.shadow');
    shadow.style.opacity = "0.3";
    shadow.style.zIndex = "2";
  }
  const shadowOut = () => {
    const shadow = document.querySelector('.shadow');
    shadow.style.opacity = "0";
    shadow.style.zIndex = "-1";
  }

  return (
    <nav className='nav'>
      <div className='navContainer'>
        <Link to="/">
          <img className='meliLogo' src={meliLogo} alt='Logo Mercado Libre'></img>
        </Link>
        <div className='location'>
          <img src={location} alt='location icon'></img>
          <div className='envio'>
            <span>Enviar a</span>
            <p>Capital Federal</p>
          </div>
          
        </div>
        <div className='search'>
          <form>
            <input placeholder='Buscar productos, marcas y más...'></input>
            <button>
              <img src={search} alt='search icon'></img>
            </button>
          </form>
        </div>
        <div className='categories'>
          <ul>
            <li onMouseOver={shadowOver} onMouseOut={shadowOut}>
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
        <img className='disney' src={disney} alt='disney icon'></img>
        <div className='account'>
          <ul>
            <li><span>Creá  tu cuenta</span></li>
            <li><span>Ingresá</span></li>
            <li><span>Mis compras</span></li>
            <CartWidget/>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar