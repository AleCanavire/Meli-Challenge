import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getItems, { getItemsCategory } from "../../services/firestore";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import CarouselHeader from "../../components/ReactSlick/CarouselHeader";
import ItemList from "./components/ItemList/ItemList";
import BuyLevel6 from "./components/BuyLevel6/BuyLevel6";
import PartnersContainer from "./components/Partners/PartnersContainer";

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
        <div className="itemsContainer">
          {products ? <ItemList products={products} /> : <ItemList products={0}/>}
        </div>
      </div>
      <div className="buyLevel6Container">
        <BuyLevel6/>
      </div>
      <div className="partnersContainer">
        <PartnersContainer/>
      </div>
    </>
  )
}

export default ItemListContainer;