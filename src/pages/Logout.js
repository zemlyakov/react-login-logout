import { Redirect } from "react-router-dom";
import EitherLoginRoute from "../components/EitherLoginRoute";

const Logout = () => {
    return (
        <EitherLoginRoute>
            <div>
                Logout Page
            </div>
            <Redirect to="/login"/>
        </EitherLoginRoute>
    );
};

export default Logout;