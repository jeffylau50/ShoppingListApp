import React, { Component } from 'react';

class Todo extends Component {
    render(){
        return(
            <div>
            <p>{this.props.todob}</p>
            <button>Edit</button>
            <button>X</button>
            </div>
        )
    }
}

export default Todo;