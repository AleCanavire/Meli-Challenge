import React, { useState, useEffect } from 'react';
import getItems from '../../services/firestore';
import ItemColumnLeft from './ItemColumnLeft';
import ItemColumnRight from './ItemColumnRight';
import ResponsiveDetail from './ResponsiveDetail';
import CarouselItems from '../../components/ReactSlick/CarouselItems';
import Item from '../ItemListContainer/components/ItemList/Item';

function ItemDetail({ product, windowSize }) {
  // Productos del vendedor
  const [products, setProducts] = useState(null);

  async function getItemsAsync() {
    const response = await getItems();
    setProducts(response);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  // Precio
  const num = product.price < 1000 ? Math.trunc(product.price * 160) : product.price;
  const price = num.toLocaleString('es-AR');
  
  // Cuotas
  const quota = Math.trunc(num / 6).toLocaleString('es-AR');

  // Vendidos
  const solds = Math.trunc(product.count * 2.3);


  return (
    <>
    <div className='itemDetail'>
      { windowSize
        ? <>
            <ItemColumnLeft product={product}/>
            <ItemColumnRight product={product} price={price} quota={quota} solds={solds}/>
          </>
        : <ResponsiveDetail product={product} price={price} quota={quota} solds={solds}/>
      }
    </div>
    <div className="denouncePost">
      <p>Publicación <span>{`#${product.id}`}</span></p>
      <a>Denunciar</a>
    </div>
    <div className="productsCarousel">
      <h2>Productos promocionados</h2>
      <CarouselItems number={5}>
        { products &&
          products.map(product => {
          return(
            <Item
              key={product.id}
              url={product.id}
              title={product.title}
              img={product.image || product.pictures[0].url}
              price={product.price}
            />
          )})
        }
      </CarouselItems>
    </div>
    <div className="productsCarousel">
      <h2>Quienes compraron este producto también compraron</h2>
      <CarouselItems number={5}>
        { products &&
          products.reverse().map(product => {
          return(
            <Item
              key={product.id}
              url={product.id}
              title={product.title}
              img={product.image || product.pictures[0].url}
              price={product.price}
            />
          )})
        }
      </CarouselItems>
    </div>
    </>
  )
}

export default ItemDetail;