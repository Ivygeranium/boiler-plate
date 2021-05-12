import './App.css';

import { Switch, Route } from "react-router-dom";

import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
import ProgramingPage from './components/views/LandingPage/ProgramingPage';
import CreatePage from './components/views/LandingPage/Sections/CreatePage';
import BlogPage from './components/views/LandingPage/BlogPage';
import Footer from './components/views/Footer/Footer';

import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';

import Auth from './hoc/auth';



function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login"component={Auth(LoginPage, false)} />
        <Route exact path="/register"component={Auth(RegisterPage, false)} />
        <Route exact path="/Programing/Create"component={Auth(CreatePage, true, 1)} />
        <Route path="/Programing/:Topics"component={Auth(ProgramingPage, true, 1)} />
        <Route path="/blog"component={Auth(BlogPage, null)} />
      </Switch>
      <Footer/>
    </>
  );
}


export default App;
