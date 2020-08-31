import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import AuthPage from "./pages/AuthPages/AuthPage";
import MainPage from "./pages/MainPage";
import AuthCheck from "./pages/AuthPages/AuthCheck";
import Navbar from "./parts/Navbar";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/auth" component={AuthPage}/>
        <Route exact path="/" component={AuthCheck(MainPage,true)}/>
    </Router>
  );
}

export default App;
