import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    state = {
        isError: false,
        errorInfo : {}
    }

    componentDidCatch(error,errorinfo)
    {
        this.setState({...this.state,isError: true, errorinfo:error})
    }
  render() {

    console.log(this.state);
    if(this.state.isError)
    {
        return (<> 
            Something Went Wrong
            {this.state.errorinfo.message}
                      
        </>)
    }
    return (
        this.props.children
    )
  }
}
