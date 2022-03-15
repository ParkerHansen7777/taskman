import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar.component';
import Home from './components/home.component';
import NewTask from './components/new-task.component';
import Calender from './components/calender.component';
function App() {
  return (
    
    <BrowserRouter> 
    <Redirect from='/' to='/Home' />
    <NavBar />
      <Switch>
        <Route path ="/Home">
          <Home />
        </Route>
        <Route path ="/NewTask">
          <NewTask />
        </Route>
        <Route path ="/Calender">
          <Calender />
        </Route>
      </Switch>
  </BrowserRouter> 
  );
}

export default App;
