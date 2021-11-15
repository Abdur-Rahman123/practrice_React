import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }
    changeHandler=(event)=> {
        var newValue=event.target.value;
        var newName=event.target.name;
        this.setState({[newName]:newValue})
        if(newName==="fname"){
          var expression=/^[a-z ,.'-]+$/i;
          if(!expression.test(newValue)){
              this.setState({fname:"first name is not valid"})
          }
        }
        if(newName==="lname"){
            var expression=/^[a-z ,.'-]+$/i;
          if(!expression.test(newValue)){
              this.setState({lname:"Last name is not valid"})
          }

        }
        if(newName==="email"){
           var expression=/^\S+@\S+\.\S+$/;
           if(!expression.test(newValue)){
               this.setState({email:"Email is not valid"})
           }
        }
        if(newName==="mobile"){
        var expression=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!expression.test(newValue)){
            this.setState({mobile:"Mobile number is not Valid"})
        }
        }
    }
    render() {
        return (
            <div>
                <p>Signup Page</p>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name:{this.state.lname}</p>
                <p>Email:{this.state.email}</p>
                <p>Mobile:{this.state.mobile}</p>
                <form>
                    <input onChange={this.changeHandler} name="fname" type="text" placeholder="Enter your First name"></input><br></br>
                    <input onChange={this.changeHandler} name="lname" type="text" placeholder="Enter your Last name"></input><br></br>
                    <input onChange={this.changeHandler} name="email" type="text" placeholder="Enter your email Adress"></input><br></br>
                    <input onChange={this.changeHandler} name="mobile" type="text" placeholder="Enter your Mobile Number"></input><br></br>
                    <input type="submit" value="Save user"></input><br></br>
                </form>
            </div>
        );
    }
}

export default SignUp;