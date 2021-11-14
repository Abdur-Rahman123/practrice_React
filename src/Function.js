import React from 'react';

const myfunction=()=>{
    function click(a){
        alert(a);
    }
    return(
    <button onClick={click.bind(this,"hello from arrow")} className="btn btn-danger">From Arrow function</button>
    )
}

export default myfunction;