import { Link } from "react-router-dom";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import CarouselHeader from "../../components/ReactSlick/CarouselHeader";
import ItemList from "./components/ItemList/ItemList";
import BuyLevel6 from "./components/BuyLevel6/BuyLevel6";
import PartnersContainer from "./components/Partners/PartnersContainer";
import { GetProducts } from "../../hooks/utilities";
import NotPhishing from "../../components/NotPhishing/NotPhishing";
import { useState } from "react";

function ItemListContainer() {

  const products = GetProducts();

  const [isHidden, setIsHidden] = useState(true);
  const onHideAlert = () => {
    setIsHidden(false)
  }
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
      { isHidden && <NotPhishing onHideAlert={onHideAlert}/> }
    </>
  )
}

export default ItemListContainer;