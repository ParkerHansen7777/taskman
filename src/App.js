import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar.component';
import Home from './components/home.component';
import CreateUsers from './components/create-user.component';
import NewTask from './components/new-task.component';
import Calendar from './components/calendar.component';
function App() {
  return (
    
    <BrowserRouter> 
    <Redirect from='/' to='/Home' />
    <NavBar />
      <Switch>
        <Route path ="/Home">
          <Home />
        </Route>
		<Route path ="/NewUser">
          <CreateUsers />
        </Route>
        <Route path ="/NewTask">
          <NewTask />
        </Route>
        <Route path ="/Calendar">
          <Calendar />
        </Route>
      </Switch>
  </BrowserRouter> 
  );
}

export default App;
