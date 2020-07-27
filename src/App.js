import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import AuthPage from "./pages/AuthPages/AuthPage";

function App() {
  return (
    <Router>
        <Route exact path="/auth" component={AuthPage}/>
    </Router>
  );
}

export default App;
