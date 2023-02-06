import AllCategories from "./Filters/AllCategories";
import JewelrySelector from "./JewelryComponents/JewelrySelector";


const Shop = () => {
    return (
        <div>
            <div>
                <AllCategories/>
            </div>
            <div className="product">
                <JewelrySelector/>
            </div>
        </div>
    )
}

export default Shop;