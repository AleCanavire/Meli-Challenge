import { useContext } from 'react';
import { cartContext } from "../../../../context/cartContext";
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../../assets/img/cart.svg';
import { ReactComponent as InCartIcon } from '../../../../assets/img/inCart.svg';

function CartWidget() {
	const myContext = useContext(cartContext);
	return (
		<div className='cartWidget'>
			<Link to={"/cart"}>
				{ myContext.itemsInCart() === 0
					? <CartIcon/>
					: <InCartIcon/>
				}
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