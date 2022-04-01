import React, { Component } from 'react';
const { v4: uuidv4 } = require('uuid');

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
         todo: ''
        };
       this.handlechange = this.handlechange.bind(this);
       this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlesubmit(evt){
        evt.preventDefault();
        const addedId = {...this.state, id: uuidv4()}
        this.props.addItem(addedId);
        this.setState({todo: ''});
        
    }
    handlechange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render(){
        return(
        <div>
            <form onSubmit={this.handlesubmit}>
            <label htmlFor='newTodo'>New Item</label>
            <input onChange={this.handlechange} value={this.state.todo} id='newTodo' name='todo'></input>
            <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default Form;