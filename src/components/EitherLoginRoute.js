import { isLoggedIn } from "../services/auth";

const EitherLoginRoute = ({children}) => {
    return isLoggedIn() ? children[0] : children[1];
};

export default EitherLoginRoute;
