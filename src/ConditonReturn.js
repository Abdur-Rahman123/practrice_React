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
        this.state.login?<button>Logout</button> : <button>Login</button>
    )
}
}
export default ConditionReturn;