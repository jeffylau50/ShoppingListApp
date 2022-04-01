import React, { Component } from 'react';
import './item.css'

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
        editing: false, 
        todo: '',
        check: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editButton = this.editButton.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }
    submitEdit(evt){
        evt.preventDefault();
        this.setState({editing: false})
        this.props.editItem(this.props.id, this.state.todo)
    }
    editButton(){
        this.setState({editing: true})
    }
    handleEdit(id){
        this.props.editItem(this.props.id)
      }
    handleClick(id){
        this.props.handleDelete(this.props.id)
        console.log(this.props.id)
    }
    handlechange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    changeStyle(){
       this.setState({check: !this.state.check})
    }
    render(){
        let result;
        if(this.state.editing === true){
            result = (
                <div>
                    <form>
                    <input onChange={this.handlechange} name='todo' defaultValue={this.props.todob}></input>
                    <button onClick={this.submitEdit}>Submit</button>
                    </form>
                </div>
            )
        }else {
            result = (
                <div>
                <p onClick={this.changeStyle} className={this.state.check?'check': 'uncheck'} >{this.props.todob}</p>
                <button onClick={this.editButton}>Edit</button>
                <button onClick={this.handleClick}>X</button>
                </div>
            )
        }
        return(
            result
        )
    }
}

export default Item;