import React, { Component } from 'react'

//we have used intehritence
export default class CounterWithClass extends Component {

    state = {
        counter: 1,
        data: []
    }

    handlePlus = ()=>{
        this.setState({...this.state,counter: this.state.counter+1})
    }

    handleMinus = ()=>{
        this.setState({...this.state,counter: this.state.counter-1}) 
    }

    componentDidMount()
    {   
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            this.setState({...this.state,data: y})
        })

    }

  render() {


    console.table(this.state.data);

  
    return (
      
      
      <div>{this.state.counter}
            <button onClick={this.handlePlus}>+</button>
            <button onClick={this.handleMinus}>-</button>
      </div>
    )
  }
}
