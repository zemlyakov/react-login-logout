import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
