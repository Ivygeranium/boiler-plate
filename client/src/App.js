import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
// import Footer from './components/views/Footer/Footer';

import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';

import Auth from './hoc/auth';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login"component={Auth(LoginPage, false)} />
            <Route exact path="/register"component={Auth(RegisterPage, false)} />
          </Switch>
      </Router>
    </div>
  );
}


export default App;
