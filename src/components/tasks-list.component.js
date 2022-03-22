import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./component.css";

const Task = props => (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.description}</td>
        <td>{props.task.status}</td>
        <td>
        <Link to={"/edit/"+props.task._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
        </td>  
    </tr>
)


export default class TasksList extends Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.state = {tasks: []};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
                this.setState({ tasks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/'+id)
            .then(res => console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
    }   
    
    taskList1() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'To-Do'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
        })
    }

    taskList2() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'Doing'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
        })
    }

    taskList3() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'Done'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
        })
    }
    
    render(){
        return(
            <div className="page">
                <h1>Tasks</h1>
                <table className="table">
                   <div className="heading"><h3>To-Do</h3></div>
                    <thead className="thead">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
							<th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        { this.taskList1() }
                    </tbody>
                </table>
                <table className="table">
                <div className="heading"><h3>Doing</h3></div>
                    <thead className="thead">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
							<th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        { this.taskList2() }
                    </tbody>
                </table>
                <table className="table">
                <div className="heading"><h3>Done</h3></div>
                    <thead className="thead">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
							<th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        { this.taskList3() }
                    </tbody>
                </table>
            </div>
        )
    }
}