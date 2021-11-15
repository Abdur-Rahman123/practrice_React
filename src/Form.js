import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            name:" "
        }
    }
    changeHandler=(event)=> {
        var newName=event.target.value;
        this.setState({name:newName})
    }
    render() {
        return (
            <div className="text-center">
                <form className="form-control">
                    <p>First Form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.changeHandler} type="text" placeholder="Enter your name"></input><br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;