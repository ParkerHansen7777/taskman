import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import './App.css';
import "./components/component.css";
function App() {
  return (
    
    //<Home />

    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        
    </Router> 
  );
}

export default App;
