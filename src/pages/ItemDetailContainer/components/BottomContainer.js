import React from 'react';
import { useResize, GetProducts } from '../../../hooks/utilities';
import CarouselItems from '../../../components/ReactSlick/CarouselItems';
import Item from '../../ItemListContainer/components/ItemList/Item';

function BottomContainer({ product }) {

  // Products
  const products = GetProducts();

  return (
    <>
      <div className="denouncePost">
        <p>Publicación <span>{`#${product.id}`}</span></p>
        <span className="denounce">Denunciar</span>
      </div>
      <div className="productsCarousel">
        <h2>Productos promocionados</h2>
        { useResize(1200)
          ? <CarouselItems number={5}>
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
          : <div className="promotedProductsContainer">
              <div className="promotedProducts">
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
              </div>
            </div>
        }
      </div>
      <div className="productsCarousel">
        <h2>Quienes compraron este producto también compraron</h2>
        { useResize(1200)
          ? <CarouselItems number={5}>
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
          : <div className="promotedProductsContainer">
              <div className="promotedProducts">
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
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default BottomContainer