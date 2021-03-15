import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import { isLoggedIn } from "./services/auth";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <Redirect to={isLoggedIn() ? '/logout' : '/login'}/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/logout">
                <Logout/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
