import { useState } from 'react';
import favorite from './favorite.png';
import loved from './loved.png'
import add from './add.png';
import added from './added.png'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/cartSlice';
import { addItemToFavorite } from '../../Redux/favoriteSlice';

function Jewelry ({product}) {
    const [showText, setShowText] = useState (false);

    const [like, setLike] = useState (false);

    const [cart, setCart] = useState (false);

    const showTextClick = (product) => {
        product.showMore = !product.showMore
        setShowText(!showText)
    };

    const dispatch = useDispatch();

    const changeLike = () => {
        if (cart === false) {
            setLike (true)
        }
    };

    const changeCart = () => {
        if (cart === false) {
            setCart (true)
        }
    }

    return (
        <div className="product-card" key = {product.productId}>
            <div className='container-jewelry'>
                <h2>{product.productName}</h2>
                <img src = {product.productImg} alt = {product.productName} width = "300px"/>
                <h3>${product.productPrice}</h3>
                <p className='text'>{product.showMore ? product.description : product.description.substring(0, 40) + "..."}
                <button className='show-more' onClick={() => showTextClick(product)}>{product.showMore ? "show less" : "show more"}</button></p>
            </div>
            <div className='control-panel'>
                <div>
                    <button onClick={()=> {dispatch(addItemToFavorite({product}))}}  className='shop-btn'><img onClick={changeLike} className='shop-img' src = {like ? loved : favorite} alt = 'Add to favorites'/></button>
                </div>
                <div>
                    <button onClick={()=> {dispatch(addItemToCart({product}))}} className='shop-btn'><img onClick={changeCart} className='shop-img' src = {cart ? added : add} alt = 'Add to cart'/></button>
                </div>
            </div>
        </div>
    )
}
export default Jewelry;