import './App.css';

import './App.css';

function Buttons ({filters}) {
    return (
        <div className="container">
            <button className="btn" onClick={()=>filters("Rings")}>RINGS</button>
            <button className="btn" onClick={()=>filters("Earrings")}>EARRINGS</button>
            <button className="btn" onClick={()=>filters("Bracelets")}>BRACELETS</button>
            <button className="btn" onClick={()=>filters("Necklaces")}>NECKLACES</button>
        </div>
    )
}
export default Buttons;