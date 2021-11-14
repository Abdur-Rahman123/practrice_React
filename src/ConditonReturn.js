import React, {Component} from 'react';

class ConditionReturn extends Component{
constructor(){
    super();
    this.state={
        login:false
    };

}
render(){
    return (
        <div>
        {this.state.login?<button>Logout</button> : <button>Login</button>}
        </div>
        
    )
}
}
export default ConditionReturn;