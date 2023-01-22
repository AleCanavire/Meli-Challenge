import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getItems, { getItemsCategory } from "../../services/firestore";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import CarouselHeader from "../ReactSlick/CarouselHeader";
import ItemList from "./ItemList";

function ItemListContainer() {

  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if (idCategory) {
      const response = await getItemsCategory(idCategory);
      setProducts(response);
    } else {
      const response = await getItems();
      setProducts(response);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  return (
    <>
      <CarouselHeader/>
      <PaymentContainer/>
      <div className="recommendations">
        <div className="sectionTitle">
          <h3>Productos</h3>
          <Link to="#">Ver todos</Link>
        </div>
        {products ? <ItemList products={products} /> : <ItemList products={0}/> }
      </div>
    </>
  )
}

export default ItemListContainer;