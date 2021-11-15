import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            username:" ",
            password:" "
        }
    }
    changeHandler=(event)=> {
        var newValue=event.target.value;
        var newName=event.target.name;
        this.setState({[newName]:newValue})
    }
    submitHandler=()=>{
        alert(this.state.username+" "+this.state.password);
    }
    render() {
        return (
            <div className="text-center">
                <form onSubmit={this.submitHandler}>
                    <p>First Form</p>
                    <p>{this.state.username}</p>
                    <p>{this.state.password}</p>
                    <input name="username" onChange={this.changeHandler} type="text" placeholder="Enter your name"></input><br></br>
                    <input name="password" onChange={this.changeHandler} type="text" placeholder="Enter your Password"></input><br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;