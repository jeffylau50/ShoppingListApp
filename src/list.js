import React, { Component } from 'react';
import Form from './form'
import Item from './item'
import Total from './total'
import './public.css'


class List extends Component {
    
    constructor(props){
        super(props);
        this.state= {
        todob: [{todo: 'Front Bumper', id: '1', price: 234}], total: 0
        };
        this.addItem = this.addItem.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    editItem(id, newContent, price){
        let editItem = this.state.todob.map(item => {
            if (item.id === id) {
                return { ...item, todo: newContent, price};
            }
            return item;
        })
        this.setState({ todob : editItem});
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
            <div id= 'todolist'>
                <h1>🛒Shopping Cart<span>Add your shopping item below!</span> </h1>
                <ul>
                {this.state.todob.map(todo => <li> <Item sum={this.totalfunction} editItem={this.editItem} handleDelete={this.handleDelete} id={todo.id} price={todo.price}  todob={todo.todo} /> </li>)}
                </ul>
                <Form addItem={this.addItem} />
                <Total total={'$'} />
            </div>
        )
    }
}

export default List;