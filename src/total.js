import React, { Component } from 'react';

class Total extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h5 className='mt-4'>Sales Tax (10%): {this.props.totaltax}</h5>
                <h4 className='mt-3'>Total: {this.props.total}</h4>
            </div>
        )
    }
}

export default Total;