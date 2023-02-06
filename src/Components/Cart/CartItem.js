import { useDispatch } from "react-redux";
import dataProducts from "../../Data/dataProducts";
import remove from "./remove.png";
import { removeItemFromCart } from "../../Redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const products = dataProducts.find(item => item.productId === cartItem.productId)
    return (
        <div className="cart-items">
            <h2>{products.productName}</h2>
            <img src={products.productImg} alt ={products.productName} width = "100px"/>
            <h3>${products.productPrice}</h3>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.productId}))}>
                <img  src={remove} alt="Remove Item" width="30px"/>
            </span>
        </div>
    )
}

export default CartItem 