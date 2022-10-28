import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }


    //new life cycle method in react 16 - componentDidCatch. which is similar to try-catch
    //if everything errors out, it will run this life cycle hook - componentDidCatch
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }

        return this.props.children
    }
}




export default ErrorBoundry;