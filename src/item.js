import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.props.handleDelete(this.props.id)
        console.log(this.props.id)
    }
    render(){
        return(
            <div>
            <p>{this.props.todob}</p>
            <button>Edit</button>
            <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Item;