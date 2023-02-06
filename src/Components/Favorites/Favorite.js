import { useSelector } from "react-redux";
import { getFavoriteItems } from "../../Redux/favoriteSlice";
import FavoriteItem from "./FavoriteItem";

function Favorite() {
    const favoriteItems = useSelector(getFavoriteItems);
   
    return (
        <div className="container-cart">
            <div className="selected-type">
                FAVORITE
            </div>
            <div>
                {favoriteItems.map(favoriteItem => <FavoriteItem favoriteItem={favoriteItem}/>)}
            </div>
        </div>
        
    )
}
export default Favorite;