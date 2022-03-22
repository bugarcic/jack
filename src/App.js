import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserDashboard from './components/UserDashboard.js'
import Login from './components/Login.js'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </Switch>
    </Router>
    // <div>
    //   <UserDashboard />
    //   <Login />
    // </div>
  );
}

export default App;
