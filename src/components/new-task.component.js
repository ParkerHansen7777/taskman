import React, { Component } from 'react';
import axios from 'axios'
import "./component.css";
export default class NewTask extends Component {
constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
		this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
			description: '',
            status: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
	
	onChangeDesc(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const task = {
            name: this.state.name,
			description: this.state.description,
            status: this.state.status,
        }

        console.log(task);

        axios.post('http://localhost:5000/tasks/add', task)
            .then(res => console.log(res.data));
       
	   window.location = '/';
            
    }
    
    render(){
        return(
            <div className="page">
                <h3>Create New Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
					<div className="form-group">
                        <label>Task Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDesc}
                            />
                    </div>
                    <div className="form-group">
                        <label>Task Status: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}>
                            <option>To-Do</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Task" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}