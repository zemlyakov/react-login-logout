import { useState } from "react";
import { Redirect } from "react-router-dom";
import { isLoggedIn, logIn } from "../services/auth";
import Alert from "../components/Alert";

const Login = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const handleLogin = () => {
        logIn();
        setSubmitted(true);
    };
    return isLoggedIn() || isSubmitted ? (
        <Alert
            message={isSubmitted ? null : "You are already logged in"}
        >
            <Redirect to="/logout"/>
        </Alert>
    ) : (
        <div>
            <h3>
                Login Page
            </h3>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" required/>
                <input type="password" placeholder="Password" required/>
                <button type="reset">Cancel</button>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
