import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
 class NavBar extends React.Component{
    render() {
        return (
            
            <div>
              <ul id="navbar">
                <NavLink className = "link" activeClassName="selected" to="/Home">Tasks</NavLink>
                <NavLink className = "link" activeClassName="selected" to="/NewTask">Add New Task</NavLink>
                
                
              </ul>
            </div>
            
        );
    }
}

export default NavBar;