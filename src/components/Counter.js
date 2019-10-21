import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    render(){
        return (
            <div>
                <button onClick={()=> {
                    this.setState({number: this.state.number += 1});}
              }> + </button>

              <button onClick={()=> {
                    this.setState({number: this.state.number -= 1});}
              }> - </button>
              <p>Number: {this.state.number}</p>
            </div>
        );
    }
}

export default Counter;