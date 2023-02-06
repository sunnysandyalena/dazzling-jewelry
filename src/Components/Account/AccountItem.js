import { useAuth0 } from "@auth0/auth0-react";

const AccountItem = () => {
    const { user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div className="container-cart">
            <div>
                <h2>{user.nickname}</h2>
            </div>
            <div>
                <h3>{user.email}</h3>
            </div>
            <div>
                <img src = {user.picture} alt = "User"/>
            </div>
        </div> ))
}

export default AccountItem;