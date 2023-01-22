import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props){

	const [cart, setCart] = useState([]);

	function addToCart(product, quantity) {
		const itemAlreadyInCart = cart.findIndex( itemInCart => itemInCart.id === product.id)
		let newCart = [...cart];

		if (itemAlreadyInCart !== -1) {
			newCart[itemAlreadyInCart].quantity += quantity;
			setCart(newCart)
		} else{
			product.quantity = quantity;
			newCart.push(product)
			setCart(newCart)
		}
	}
  function addItem(id) {
		const itemInCart = cart.findIndex( item => item.id === id)
		let newCart = [...cart];

		if (newCart[itemInCart].quantity > 0) {
			newCart[itemInCart].quantity += 1;
			setCart(newCart)
    }
  }

  function removeItem(id) {
    const itemInCart = cart.findIndex( item => item.id === id)
		let newCart = [...cart];

		if (newCart[itemInCart].quantity > 1) {
			newCart[itemInCart].quantity -= 1;
			setCart(newCart)
    }
	}

	function itemsInCart() {
		let total = 0;
		cart.forEach((itemInCart) => {
			total = total + itemInCart.quantity
		})
		return total
	}

  function priceTotal() {
		let totalPrice = 0;
		cart.forEach((itemInCart) => {
			totalPrice = totalPrice + (
        (itemInCart.price < 1000
        ? (itemInCart.price * 160) * itemInCart.quantity
        : itemInCart.price * itemInCart.quantity)
      );
		})
		return totalPrice
	}

  function removeItems(id) {
    const newCart = cart.filter(product => product.id !== id)
    setCart(newCart)
  }
  function clearCart() {
    const newCart = [];
    setCart(newCart)
  }

  function isInCart(id) {
    const product = cart.find(product => product.id === id);
    return product
  }

	return(
		<cartContext.Provider
    value={{cart, itemsInCart, addToCart, addItem, removeItem, priceTotal, removeItems, clearCart, isInCart}}>
			{props.children}
		</cartContext.Provider>
	)
}