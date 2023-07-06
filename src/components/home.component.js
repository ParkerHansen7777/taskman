import React, { Component } from 'react';
import "./component.css";

export default class Home extends Component {

    render(){
        return(
            <div className="landing" >
                <h1>Soon to be Task Manager Application.</h1>
                <footer className="Page-footer"><span>Created by Me (© 2023)</span></footer>
            </div>
        );
    }
}