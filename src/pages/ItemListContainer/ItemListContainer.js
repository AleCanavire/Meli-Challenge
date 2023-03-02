import { useState } from "react";
import CarouselHeader from "../../components/ReactSlick/CarouselHeader";
import PaymentContainer from "./components/PaymentContainer/PaymentContainer";
import ItemList from "./components/ItemList/ItemList";
import BuyLevel6 from "./components/BuyLevel6/BuyLevel6";
import PartnersContainer from "./components/Partners/PartnersContainer";
import DiscoveryContainer from "./components/Discovery/DiscoveryContainer";
import NotPhishing from "../../components/NotPhishing/NotPhishing";
import StoresContainer from "./components/Stores/StoresContainer";

function ItemListContainer() {

  const [isHidden, setIsHidden] = useState(true);
  const onHideAlert = () => {
    setIsHidden(false)
  }
  return (
    <>
      <CarouselHeader/>
      <PaymentContainer/>
      <section className="recommendations">
        <ItemList/>
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
      <section className="storesContainer">
        <StoresContainer/>
      </section>
      <section className="discoveryContainer">
        <DiscoveryContainer number1={2} number2={4}/>
      </section>
      { isHidden && <NotPhishing onHideAlert={onHideAlert}/> }
    </>
  )
}

export default ItemListContainer;