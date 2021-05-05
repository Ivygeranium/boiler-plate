import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
// import Footer from './components/views/Footer/Footer';

import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';




function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login"component={LoginPage} />
            <Route exact path="/register"component={RegisterPage} />
          </Switch>
      </Router>
    </div>
  );
}


export default App;
