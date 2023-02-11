import React, {useState, useEffect} from 'react';
import ItemColumnLeft from './ItemColumnLeft';
import ItemColumnRight from './ItemColumnRight';
import ResponsiveDetail from './ResponsiveDetail';

function ItemDetail({ product }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 1200);

  function updateSize() {
    setWindowSize(window.innerWidth > 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div className='itemDetail'>
      { windowSize ?
        <>
          <ItemColumnLeft product={product}/>
          <ItemColumnRight product={product}/>
        </>
        : <ResponsiveDetail product={product}/>
      }
    </div>
  )
}

export default ItemDetail;