import { Link } from "react-router-dom";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import CarouselHeader from "../../components/ReactSlick/CarouselHeader";
import ItemList from "./components/ItemList/ItemList";
import BuyLevel6 from "./components/BuyLevel6/BuyLevel6";
import PartnersContainer from "./components/Partners/PartnersContainer";
import { GetProducts } from "../../hooks/utilities";
import NotPhishing from "../../components/NotPhishing/NotPhishing";
import { useState } from "react";
import DiscoveryContainer from "./components/Discovery/DiscoveryContainer";

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
      <section className="recommendations">
        <div className="sectionTitle">
          <h2>Productos</h2>
          <Link to="#">Ver todos</Link>
        </div>
        <div className="itemsContainer">
          {products ? <ItemList products={products} /> : <ItemList products={0}/>}
        </div>
      </section>
      <section className="buyLevel6Container">
        <BuyLevel6/>
      </section>
      <section className="partnersContainer">
        <PartnersContainer/>
      </section>
      <section className="discoveryContainer">
        <DiscoveryContainer number1={0} number2={2}/>
      </section>
      { isHidden && <NotPhishing onHideAlert={onHideAlert}/> }
    </>
  )
}

export default ItemListContainer;