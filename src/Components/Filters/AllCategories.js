import FilterOne from "./FilterOne";

const AllCategories = () => {
    return (
        <div className="container">
            {['ALL JEWELRY', 'BRACELETS', 'EARRINGS', 'RINGS', 'NECKLACES'].map((type,productId) => <FilterOne type= {type} key = {productId}/>)}
            
        </div>
    )
}

export default AllCategories;