import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


export default class Navbar extends Component {

    render() {
        return (
          <nav className="navbar">
            <Link to="/" className="navbar-brand">Task Manager</Link>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
          </nav>  
        );
    }

}