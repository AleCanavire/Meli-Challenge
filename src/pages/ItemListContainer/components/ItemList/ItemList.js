import React from "react";
import Item from "./Item";
import ItemSkeleton from "./ItemSkeleton";
import CarouselItems from "../../../../components/ReactSlick/CarouselItems";

function ItemList({ products }) {

  return (
    <>
      { products === 0
      ? [1,2,3,4,5].map((number) => {
          return (
            <ItemSkeleton key={number}/>
          );
        })
      : <CarouselItems number={5}>
          {products.map((product) => {
            return (
              <Item
                key={product.id}
                url={product.id}
                title={product.title}
                img={product.image || product.pictures[0].url}
                price={product.price}
              />
            )
          })}  
        </CarouselItems>
      }
    </>
  );
}

export default ItemList;