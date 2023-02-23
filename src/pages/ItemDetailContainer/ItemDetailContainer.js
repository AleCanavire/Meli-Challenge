import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { GetProduct, priceItem, useResize } from "../../hooks/utilities";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ItemDetailSkeleton from "./components/ItemDetailSkeleton/ItemDetailSkeleton";
import AddedToCart from "./components/AddedToCart/AddedToCart";

function ItemDetailContainer() {
  const { product, isLoading } = GetProduct()

  const myContext = useContext(cartContext);
  let productIsInCart = myContext.isInCart(product.id);

  // Precio
  const { price } = priceItem(product.price);

  // Responsive
  const windowSize = useResize(1200);

  return (
    <>
      { productIsInCart &&
      <AddedToCart
      title={product.title}
      price={(Math.trunc(price * productIsInCart.quantity)).toLocaleString("es-AR")}
      quantity={productIsInCart.quantity}
      image={product.image || product.thumbnail}/>}

      <div className="itemDetailContainer">
        { windowSize &&
          <div className="categoryShare">
            <div className="category">
              <Link to="/">Volver al listado</Link><span>{product.category}</span>  
            </div>
            <div className="share">
              <p>Compartir</p><span>Vender uno igual</span>
            </div>
          </div>
        }
        {isLoading
        ? <ItemDetailSkeleton/>
        : <ItemDetail product={product} windowSize={windowSize}/>}
      </div>
    </>
  )
}

export default ItemDetailContainer;