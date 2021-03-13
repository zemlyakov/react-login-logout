import { Redirect } from "react-router-dom";
import EitherLoginRoute from "../components/EitherLoginRoute";

const Login = () => {
    return (
        <EitherLoginRoute>
            <Redirect to="/logout"/>
            <div>
                <h3>
                    Login Page
                </h3>
            </div>
        </EitherLoginRoute>
    );
};

export default Login;
