import React, { Component } from 'react';
import Form from './form'
import Todo from './todo'

class List extends Component {
    constructor(props){
        super(props);
        this.state= {
        todob: ['walk the cat']
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        this.setState(state => ({ todob: [... state.todob, item]}))
    }
    render(){
        return(
            <div>
                {this.state.todob.map(todo => <Todo  todob={todo.todo} />
 )}

                <Form addItem={this.addItem} />
            </div>
        )
    }
}

export default List;