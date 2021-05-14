import './App.css';

import { Switch, Route } from "react-router-dom";

import NavBar from './components/views/NavBar/NavBar';
import LandingPage from './components/views/LandingPage/LandingPage';
import ProgramingPage from './components/views/ProgramingPage/ProgramingPage';
import CreatePage from './components/views/ProgramingPage/Sections/CreatePage';
import CreateBlogList from './components/views/ProgramingPage/Sections/CreateBlogList';
import Footer from './components/views/Footer/Footer';

import AccountPage from './components/views/AccountPage/AccountPage';
import RegisterPage from './components/views/AccountPage/RegisterPage';
import LoginPage from './components/views/AccountPage/LoginPage';

import Auth from './hoc/auth';



function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/account"component={Auth(AccountPage, true)} />
        <Route exact path="/login"component={Auth(LoginPage, false)} />
        <Route exact path="/register"component={Auth(RegisterPage, false)} />
        <Route exact path="/Programing/Create"component={Auth(CreatePage, true, 1)} />
        <Route exact path="/Programing/CreateBlogList"component={Auth(CreateBlogList, true, 1)} />
        <Route path="/Programing/:Topics"component={Auth(ProgramingPage, true, 1)} />
      </Switch>
      <Footer/>
    </>
  );
}


export default App;
