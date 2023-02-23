import React from 'react';
import { GetProducts, priceItem } from '../../hooks/utilities';
import ItemColumnLeft from './ItemColumnLeft';
import ItemColumnRight from './ItemColumnRight';
import ResponsiveDetail from './ResponsiveDetail';
import CarouselItems from '../../components/ReactSlick/CarouselItems';
import Item from '../ItemListContainer/components/ItemList/Item';

function ItemDetail({ product, windowSize }) {
  // Products
  const products = GetProducts();

  // Prices
  const { price, quota, solds } = priceItem(product.price, product.count);
  const priceArg = price.toLocaleString('es-AR');

  return (
    <>
    <div className='itemDetail'>
      { windowSize
        ? <>
            <ItemColumnLeft product={product}/>
            <ItemColumnRight product={product} price={priceArg} quota={quota} solds={solds}/>
          </>
        : <ResponsiveDetail product={product} price={priceArg} quota={quota} solds={solds}/>
      }
    </div>
    <div className="denouncePost">
      <p>Publicación <span>{`#${product.id}`}</span></p>
      <span className="denounce">Denunciar</span>
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