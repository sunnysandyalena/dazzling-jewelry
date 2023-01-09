import './App.css';

function AllButton ({filters}) {
    return (
        <div className="container">
            <button className="btn" onClick={()=>filters("All")}>ALL JEWELRY</button>
        </div>
    )
}
export default AllButton;