import { useState } from 'react';
import { dataProducts } from './dataProducts';
import Free from './Free';
import Footer from './Footer';
import Buttons from './Buttons';
import ButtonsTwo from './ButtonsTwo';
import ButtonsThree from './ButtonsThree';
import Jewelry from './Jewelry';
import AllButton from './AllButton';

function Shop() {
    const [products, setProducts] = useState (dataProducts);

    const allJewelry = (jewelry) => { 
        const filtered = dataProducts.filter (item => item.jewelry === jewelry);
        setProducts(filtered);
    }
    const newJewelry = (type) => { 
        const filtered = dataProducts.filter (item => item.type === type);
        setProducts(filtered);
    }
    const stoneJewelry = (stone) => { 
        const filtered = dataProducts.filter (item => item.stone === stone);
        setProducts(filtered);
    }
    const matherialJewelry = (matherial) => { 
        const filtered = dataProducts.filter (item => item.matherial === matherial);
        setProducts(filtered);
    }
    return (
        <div>
            <div>
                <Free/>
            </div>
            <div>
                <AllButton filters={allJewelry}/>
            </div>
            <div>
                <Buttons filters={newJewelry}/>
            </div>
            <div>
                <ButtonsTwo filters={stoneJewelry}/>
            </div>
            <div>
                <ButtonsThree filters={matherialJewelry}/>
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