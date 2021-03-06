import React, { Component } from 'react';
import './form.css'
const { v4: uuidv4 } = require('uuid');

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
         todo: '',
         price: 0
        };
       this.handlechange = this.handlechange.bind(this);
       this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlesubmit(evt){
        evt.preventDefault();
        const addedId = {...this.state, id: uuidv4()}
        this.props.addItem(addedId);
        this.setState({todo: '', price: ''});
        
    }
    handlechange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render(){
        return(
        <div class='mt-0'>
            <form className='mt-0' onSubmit={this.handlesubmit}>
            <label htmlFor='newTodo'>New Item</label>
            <input className='mr-3 Iteminput' maxlength="40" value={this.state.todo} placeholder='Enter Item' onChange={this.handlechange} id='newTodo' name='todo'></input>
            <label className='mt-2' htmlFor='price'>💰</label>
            <input onChange={this.handlechange} className='Priceinput' value={this.state.price} name='price' id='price' type='number' step='0.01' placeholder='$'></input>
            <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default Form;