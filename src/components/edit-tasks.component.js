import React, { Component } from 'react';
import axios from 'axios';
import "./component.css";
export default class EditTasks extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: ''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/tasks/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              name: response.data.name,
              description: response.data.description,
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
    

    onSubmit(e) {
        e.preventDefault();

        const task = {
            name: this.state.name,
            description: this.state.description,
            
        }

        console.log(task);

        axios.post('http://localhost:5000/tasks/update/'+this.props.match.params.id, task)
            .then(res => console.log(res.data));
        
    

        window.location = '/';
    }


    render(){
        return(
        <div className="page">
            <h3>Edit Game Log</h3>
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
                    <input type="submit" value="Edit Task" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}