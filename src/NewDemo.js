import React, { Component } from 'react';
import reactDom from 'react-dom';

class NewDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            isSet:true
        };
        this.toggles = this.toggles.bind(this);
    }
    change(){
        var id=document.getElementById("myId");
        //console.log(id);
        var element=<h1>Karim</h1>
         reactDom.render(element,id)
    }
    toggles(){
        this.setState({isSet:!this.state.isSet});
    }
    render() {
        return (
            <div>
                <button onClick={this.toggles}>Change Value</button>
                {this.state.isSet?<h1 id="myId">Rahman</h1>:<h1>Karim</h1>}
                {}
            </div>
        );
    }
}

export default NewDemo;