import { useDispatch, useSelector } from "react-redux";
import { getSelectedType, filterType } from "../../Redux/jewelrySlice";


const FilterOne = ({type}) => {
    const selectedType = useSelector(getSelectedType);
    const dispatch = useDispatch();

    return (
        <div>
            <p onClick={()=>{dispatch(filterType(type))}} className={selectedType === type ? "selected-type" : "container-selector"}>{type}</p>
        </div>
    )
}

export default FilterOne;