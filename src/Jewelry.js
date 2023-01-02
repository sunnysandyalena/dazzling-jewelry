import { useState } from 'react';
import favorite from './favorite.png';
import cart from './cart.png';

function Jewelry ({products}) {
    const [showText, setShowText] = useState (false);
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }
    return (
        <div className="products">
            {products.map ((item => {
                const {productId, productImg, productName, productPrice, description, showMore} = item;
                return <div className="product-card" key={productId}>
                    <div className='jewelry-container'>
                        <h2>{productName}</h2>
                        <img src = {productImg} alt = {productName} width = "300px"/>
                        <h3>${productPrice}</h3>
                        <p className='text'>{showMore ? description : description.substring(0, 40) + "..."}
                        <button className='show-more' onClick={() => showTextClick(item)}>{showMore ? "show less" : "show more"}</button></p>
                    </div>
                    <div className='control-panel'>
                        <div>
                            <button className='shop-btn'><img className='shop-img' src = {favorite} alt = 'Add to favorites'/></button>
                        </div>
                        <div>
                            <button className='shop-btn'><img className='shop-img' src = {cart} alt = 'Add to cart'/></button>
                        </div>

                    </div>
                </div>
            }))}
        </div>
    )
}
export default Jewelry;