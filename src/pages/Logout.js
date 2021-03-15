import { Redirect, useHistory } from "react-router-dom";
import { isLoggedIn, logOut } from "../services/auth";
import Alert from "../components/Alert";

const Logout = () => {
    const history = useHistory();
    const handleLogout = () => {
        logOut();
        history.push('/login');
    };
    return isLoggedIn() ? (
        <div>
            <h3>Logout Page</h3>
            <div>Hi, Marcus</div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    ) : (
        <Alert message="You are not allowed to view logout page. Please, log in">
            <Redirect to="/login"/>
        </Alert>
    );
};

export default Logout;