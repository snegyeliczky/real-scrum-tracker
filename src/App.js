import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import AuthPage from "./pages/AuthPages/AuthPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
        <Route exact path="/auth" component={AuthPage}/>
        <Route exact path="/" component={MainPage}/>
    </Router>
  );
}

export default App;
