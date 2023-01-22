import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';
import cart from '../../assets/img/cart.svg';
import inCart from '../../assets/img/inCart.svg';


function CartWidget() {
	const myContext = useContext(cartContext);
	return (
		<div className='cartWidget'>
			<Link to={"/PreEntrega1-Canavire/cart"}>
				<img src={
					myContext.itemsInCart() === 0
					? cart
					: inCart
					}>
				</img>
				<div className='itemsInCart'>
					{
						myContext.itemsInCart() === 0 ? "" :
            myContext.itemsInCart() > 9 ? <span>9+</span> :
            <span>{myContext.itemsInCart()}</span>
					}
				</div>
			</Link>
		</div>
	)
}

export default CartWidget