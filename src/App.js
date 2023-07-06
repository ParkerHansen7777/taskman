import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar.component';
//import CreateUsers from './components/create-user.component';
import NewTask from './components/new-task.component';
//import Calendar from './components/calendar.component';
import TasksList from './components/tasks-list.component';
import EditTasks from './components/edit-tasks.component'
function App() {
  return (
    
    <BrowserRouter> 
    <NavBar />
      <Switch>
        <Route path ="/">
         <TasksList />
        </Route>
        <Route path ="/NewTask">
          <NewTask />
        </Route>
		<Route path ='/edit/:id' component={EditTasks}/>
		</Switch>
  </BrowserRouter> 
  );
}

export default App;
