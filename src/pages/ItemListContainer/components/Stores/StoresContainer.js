import React from 'react';
import { useResize } from '../../../../hooks/utilities';
import Store, { stores } from './Store';
import StoreSlider from './StoreSlider';

function StoresContainer() {
  return (
    <div className="storeSlider">
      <div className="sectionTitle">
        <h2>{useResize(1024) ? "Las mejores tiendas te esperan" : "Tiendas Oficiales"}</h2>
        <a>{useResize(1024) ? "Ver tiendas" : "Ver más"}</a>
      </div>
      <div className="storeBody">
        <div className="stores">
          { useResize(1024)
            ? <StoreSlider/>
            :  stores.map((store, index) => {
              return(
                <Store
                key={index}
                name={store.name}
                background={store.background}
                logo={store.logo}
                products={store.products}
                />
              )})
          }  
        </div>
      </div>
    </div>
  )
}

export default StoresContainer