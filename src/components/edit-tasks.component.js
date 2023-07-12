import React, { Component } from 'react';
import axios from 'axios';
import "./component.css";
export default class EditTasks extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
		this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            status: ''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/tasks/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              name: response.data.name,
              description: response.data.description,
              status: response.data.status,
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    
     
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

        axios.post('http://localhost:5000/tasks/update/'+this.props.match.params.id, task)
            .then(res => console.log(res.data));
        
    

        window.location = '/';
    }


    render(){
        return(
        <div className="Page">
            <div className="flex-box-vert">
            <div className="container">
                <h3>Edit Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDesc}
                            />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
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
                        <input type="submit" value="Submit Changes" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
            <footer className="Page-footer"><span>Created by Me (© 2023)</span></footer>
        </div>
        )
    }
}