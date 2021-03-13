import { isLoggedIn } from "../services/auth";

const EitherLoginRoute = ({children}) =>
    isLoggedIn() ? children[0] : children[1]
;

export default EitherLoginRoute;
