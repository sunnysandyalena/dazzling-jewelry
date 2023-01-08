import './App.css';

function ButtonsTwo ({filters}) {
    return (
        <div className="container">
            <button className="btn" onClick={()=>filters("Diamond")}>DIAMOND JEWELRY</button>
            <button className="btn" onClick={()=>filters("Gemstone")}>GEMSTONE JEWELRY</button>
        </div>
    )
}
export default ButtonsTwo;