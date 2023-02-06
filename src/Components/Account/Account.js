import LogIn from "./LogIn";
import LogOut from "./LogOut";
import IsLoading from "./IsLoading";
import { useAuth0 } from "@auth0/auth0-react";
import AccountItem from "./AccountItem";

const Account = () => {
    const { isLoading } = useAuth0();
    if (isLoading) return <IsLoading/>
    return (
        <div className="container-cart">
            <div className="selected-type">
                ACCOUNT
            </div>
            <div className="container-cart">
                <div>
                    <AccountItem/>
                </div>
                <div>
                    <LogIn/>
                </div>
                <div>
                    <LogOut/>
                </div>
            </div>
        </div>
    )
}

export default Account;