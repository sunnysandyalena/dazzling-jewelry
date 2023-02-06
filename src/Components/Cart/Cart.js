import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div className="container-cart">
            <div className="selected-type">
                CART
            </div>
            <div>
                {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
            </div>
            <div>
                <h3>CART TOTAL: ${totalPrice}</h3>
            </div>
        </div>
        
    )
}
export default Cart;