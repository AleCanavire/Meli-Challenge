import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleItem } from "../../services/firestore";
import { cartContext } from "../../context/cartContext";
import { useResize } from "../../hooks/utilities";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ItemDetailSkeleton from "./components/ItemDetailSkeleton/ItemDetailSkeleton";
import AddedToCart from "./components/AddedToCart/AddedToCart";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function getItemsAsync() {
    getSingleItem(id).then(response => {
      setProduct(response);
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getItemsAsync();
  }, [id]);

  const myContext = useContext(cartContext);
  let productIsInCart = myContext.isInCart(product.id);

  // Precio
  const price = product.price < 1000 ? Math.trunc(product.price * 160) : product.price;

  const windowSize = useResize();

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