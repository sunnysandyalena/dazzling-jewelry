import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div className="container">
            <div className="container-profile">

            </div>
            <div className="container-btn">
                <button className="log-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOG OUT</button>
            </div>
        </div> ))
}

export default LogOut;