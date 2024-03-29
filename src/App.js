import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import NavBar from './components/navbar.component';
import NewTask from './components/new-task.component';
import TasksList from './components/tasks-list.component';
import EditTasks from './components/edit-tasks.component'
function App() {
  return (
    
    <BrowserRouter> 
      <Switch>
        <Route exact path ="/">
         <TasksList />
        </Route>
        <Route exact path ="/NewTask">
          <NewTask />
        </Route>
		<Route path ='/edit/:id' component={EditTasks}/>
		</Switch>
  </BrowserRouter> 
  );
}

export default App;
