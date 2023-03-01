import React from 'react';
import { priceItem } from '../../hooks/utilities';
import ItemColumnLeft from './ItemColumnLeft';
import ItemColumnRight from './ItemColumnRight';
import ResponsiveDetail from './ResponsiveDetail';
import BottomContainer from './components/BottomContainer';

function ItemDetail({ product, windowSize }) {

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
    <BottomContainer product={product}/>
    </>
  )
}

export default ItemDetail;