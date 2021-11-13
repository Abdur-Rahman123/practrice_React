import React, { Component } from "react";

class Class extends Component {
    click(a){
        alert(a)
    }
    render() {
        return(
            <div>
            <button onClick={this.click.bind(this,"click form class")}>Click From Class</button>
        <h1>Hello from class component and my name is {this.props.name}</h1>
        </div>
        )
    }
}
export default Class;