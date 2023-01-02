import { useState } from 'react';
import { dataProducts } from './dataProducts';
import Free from './Free';
import Footer from './Footer';
import Buttons from './Buttons';
import Jewelry from './Jewelry';

function Shop() {
    const [products, setProducts] = useState (dataProducts);

    const newJewelry = (searchTerm) => { 
        const filtered = dataProducts.filter (item => item.searchTerm === searchTerm);
        setProducts(filtered);
    }
    return (
        <div>
            <div>
                <Free/>
            </div>
            <div>
                <Buttons filters={newJewelry}/>
            </div>
            <div>
                <Jewelry products={products}/>
            </div>
            <div>
                <hr className='line'/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Shop;