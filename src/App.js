import './App.css';
import { React } from 'react';
import NumberLister from './NumberLister';
import MyProfile from './MyProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Number Lister</Link>
            </li>
            <li>
              <Link to="/myprofile">My Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <NumberLister />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
