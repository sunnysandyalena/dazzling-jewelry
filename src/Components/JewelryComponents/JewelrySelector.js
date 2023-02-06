import { useSelector } from "react-redux";
import dataProducts from "../../Data/dataProducts";
import Jewelry from "./Jewelry";
import { getSelectedType } from "../../Redux/jewelrySlice";

const JewelrySelector = () => {
    const selectedType = useSelector(getSelectedType);

    return (
        <div className="products">
            {dataProducts
            .filter(product => {
                if (selectedType === 'ALL JEWELRY') return true;
                return selectedType === product.type;
            }
        )
            .map((product, productId) => <Jewelry  product={product} key = {productId}/>)}
        </div>
    )
}

export default JewelrySelector;