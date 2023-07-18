import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./component.css";
import NewTask from './new-task.component';

const Task = props => (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.description}</td>
        <td>{props.task.status}</td>
        <td>
        <button className="edit_button"><Link  className="edit_link" to={"/edit/"+props.task._id}>edit</Link></button> | <button className="button-del" onClick={() => { props.deleteTask(props.task._id) }}>delete</button>
        </td>  
    </tr>
)


export default class TasksList extends Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.state = {tasks: [], creatingTask: false};

    }

    componentDidMount() {
        axios.get('https://taskmanager-backend-1st0.onrender.com/tasks/')
            .then(response => {
                this.setState({ tasks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTask(id) {
        axios.delete('https://taskmanager-backend-1st0.onrender.com/tasks/'+id)
            .then(res => console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
    }   
    
    taskList1() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'To-Do'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
            else{return null}
        })
    }

    taskList2() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'Doing'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
            else{return null}
        })
    }

    taskList3() {
        return this.state.tasks.map(currenttask => { if(currenttask.status === 'Done'){
            return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>; }
            else{return null}
        })
    }
    
    render(){
        
        
        let connected;
        if(this.state.tasks.length < 1){
           connected = <h2>Backend spinning up....please wait a few seconds</h2>;
        }
        
        
        return(
            <div className="Page">
                <header className="Page-header"><h1>Task Organizer</h1> {connected} </header>
                <div className="Page-body">
                    <div className="flex-box">
                        <div className="about-text">
                            <p>Tasks are seperated into tables based on their status 'To-Do', 'Doing', or 'Done'. <br />
                            You can create a task by using the 'Create Task' button below. </p>
                        </div>
                        <div className="tables">
                        <table className="table">
                            <caption>To-Do</caption>
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
                        <caption>Doing</caption>
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
                        <caption>Done</caption>
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
                    </div>
                        <div className="flex-box-vert">
                            <button className="button-ct" onClick={() => this.state.creatingTask ? this.setState ({creatingTask: false}) : this.setState ({creatingTask: true}) }>Create Task</button>
                            {this.state.creatingTask ? <NewTask /> : null}
                        </div>
                 </div>
                <footer className="Page-footer"><span>Created by Parker (© 2023)</span></footer>
            </div>
        )
    }
}