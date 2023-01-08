import './App.css';

function ButtonsThree ({filters}) {
    return (
        <div className="container">
            <button className="btn" onClick={()=>filters("Yellow Gold")}>YELLOW GOLD JEWELRY</button>
            <button className="btn" onClick={()=>filters("Rose Gold")}>ROSE GOLD JEWELRY</button>
            <button className="btn" onClick={()=>filters("White Gold")}>WHITE GOLD JEWELRY</button>
        </div>
    )
}
export default ButtonsThree;