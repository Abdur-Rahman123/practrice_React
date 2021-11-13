import React from 'react';

function Welcome(props){
    function click(a){
        alert(a)
    }
    return(
        <div>
        <button onClick={click.bind(this,"I am from function")}>Click me</button>
        <h1>Welcome,{props.name} and your age is {props.age}!</h1>
        </div>
    )
}
export default Welcome;