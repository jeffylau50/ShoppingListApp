import React, { Component } from 'react';
import Form from './form'
import Todo from './todo'

class List extends Component {
    constructor(props){
        super(props);
        this.state= {

        }
    }
    render(){
        return(
            <div>

                <Todo />
                <Form />
                
            </div>
        )
    }
}

export default List;