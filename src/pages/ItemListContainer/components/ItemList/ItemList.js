import React, { useState } from "react";
import Item from "./Item";
import ItemSkeleton from "./ItemSkeleton";
import CarouselItems from "../../../../components/ReactSlick/CarouselItems";
import { useResize, GetProducts } from "../../../../hooks/utilities";

function ItemList() {

  const products = GetProducts();

    // ===== Ver mas Productos =====
    const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="recommendationsList">
      { useResize(1200)
        ? <>
            <div className="sectionTitle">
              <h2>Productos</h2>
              <a>Ver todos</a>
            </div>
            <div className="itemsContainer">
            { products
              ? <CarouselItems number={5}>
                  {products.map((product) => {
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
              : [1,2,3,4,5].map((number) => {
                  return (
                    <ItemSkeleton key={number}/>
                  )
                })
            }
            </div>
          </>
        : <>
            <div className="sectionTitle">
              <h2>Productos</h2>
            </div>
            <div className={`itemsContainer${ isHidden ? "" :  " itemsVisibles"}`}>
              { products &&
                products.map((product) => {
                  return (
                    <Item
                      key={product.id}
                      url={product.id}
                      title={product.title}
                      img={product.image || product.pictures[0].url}
                      price={product.price}
                    />
                  )})
              } 
            </div>
            <div className="moreProducts" onClick={()=>setIsHidden(!isHidden)}>
              {isHidden ? "Ver más" : "Ver menos"}
            </div>
          </>
      }
    </div>
  );
}

export default ItemList;