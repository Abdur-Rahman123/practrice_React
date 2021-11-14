import React,{ Component}   from 'react';

class State extends Component{
    constructor(){
        super();
        this.state={
            value:0,
            name:"Rahman"
        };
    }
    increment(type){
       this.setState(prevent=>{
           return {value:type=='add' ? prevent.value+1 : prevent.value-1}
       })
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.value}</h1>
           <input className="btn btn-primary" onClick={this.increment.bind(this,"add")} type="button" value="Increment"/>
           <input className="btn btn-danger  " onClick={this.increment.bind(this,"sub")} type="button" value="Decrement"/>
            <h1>{this.state.name}</h1>
        </div>
        )
    }
}
export default State;