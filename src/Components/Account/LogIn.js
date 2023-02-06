import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <div className="container">
            <div className="container-btn">
                <button className="log-btn" onClick={()=>loginWithRedirect()}>LOG IN OR SIGN UP</button>
            </div>
        </div> ))
}

export default LogIn;