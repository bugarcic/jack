import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserDashboard from './components/UserDashboard.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import yoo from './landing/index.html'
var test = require('./landing/index.js')



const App = () => {

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
