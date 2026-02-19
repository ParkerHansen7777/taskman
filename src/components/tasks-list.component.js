import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewTask from './new-task.component';

const Task = props => (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.description}</td>
        <td>
            <span className={`status-badge status-${props.task.status}`}>
                {props.task.status}
            </span>
        </td>
        <td>
            <div className="action-buttons">
                <Link className="btn btn-edit" to={"/edit/"+props.task._id}>Edit</Link>
                <button className="btn btn-del" onClick={() => props.deleteTask(props.task._id)}>Delete</button>
            </div>
        </td>  
    </tr>
)


export default class TasksList extends Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.state = {tasks: [], creatingTask: false, loading: true};

    }

    fetchTasks = () => {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
            this.setState({
                tasks: response.data,
                loading: false
            });
            })
            .catch(() => {
            console.log("Backend not ready — retrying in 3s");
            setTimeout(this.fetchTasks, 3000);
        });
    };
    
    componentDidMount() {
        this.fetchTasks();
    }

    addTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, task],
            creatingTask: false
        })
    }
    
    deleteTask(id) {
        axios.delete('http://localhost:5000/tasks/'+id)
            .then(() => {
                this.setState(prev => ({
                    tasks: prev.tasks.filter(t => t._id !== id)
                }));
            });
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
        return(
            <div className="Page">
                <header className="Page-header">
                    <h1>Task Organizer</h1>
                     {this.state.loading && <div className="spinner"></div>}
                    </header>
                <div className="Page-body">
                    <div className="flex-box">
                        <div className="about-text">
                            <p>Tasks are seperated into tables based on their status 'To-Do', 'Doing', or 'Done'. <br />
                            You can create a task by using the 'Create Task' button below. </p>
                        </div>
                        <div className="tables-grid">
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
                            {this.state.creatingTask ? 
                                <NewTask onTaskCreated={this.addTask} /> 
                                : null}
                        </div>
                 </div>
                <footer className="Page-footer"><span>Created by Parker (© 2023)</span></footer>
            </div>
        )
    }
}