import { Redirect } from "react-router-dom";
import EitherLoginRoute from "../components/EitherLoginRoute";
import { logOut } from "../services/auth";

const Logout = () => {
    return (
        <EitherLoginRoute>
            <div>
                <h3>Logout Page</h3>
                <div>Hi, Marcus</div>
                <button onClick={logOut}>
                    Logout
                </button>
            </div>
            <Redirect to="/login"/>
        </EitherLoginRoute>
    );
};

export default Logout;