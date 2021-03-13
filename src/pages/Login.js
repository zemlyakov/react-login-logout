import { Redirect } from "react-router-dom";
import EitherLoginRoute from "../components/EitherLoginRoute";
import { logIn } from "../services/auth";

const Login = () => {
    return (
        <EitherLoginRoute>
            <Redirect to="/logout"/>
            <div>
                <h3>
                    Login Page
                </h3>
                <form onSubmit={logIn}>
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="reset">Cancel</button>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </EitherLoginRoute>
    );
};

export default Login;
