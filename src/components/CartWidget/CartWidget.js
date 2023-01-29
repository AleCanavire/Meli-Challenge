import { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';

function CartWidget() {
	const myContext = useContext(cartContext);
	return (
		<div className='cartWidget'>
			<Link to={"/cart"}>
				<img src={
					myContext.itemsInCart() === 0
					? '/img/cart.svg'
					: '/img/inCart.svg'
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