import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './list'
import './index.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <List />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));