import React, { Component } from 'react';
import Form from './form'
import Item from './item'

class List extends Component {
    constructor(props){
        super(props);
        this.state= {
        todob: [{todo: 'walk the cat', id: '1'}]
        };
        this.addItem = this.addItem.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id){
        let newarray = this.state.todob.filter(p => p.id !== id)
        this.setState({todob : newarray})
    }
    addItem(item){
        this.setState(state => ({ todob: [... state.todob, item]}))
    }
    render(){
        return(
            <div>
                {this.state.todob.map(todo => <Item handleDelete={this.handleDelete} id={todo.id}  todob={todo.todo} />)}

                <Form addItem={this.addItem} />
            </div>
        )
    }
}

export default List;