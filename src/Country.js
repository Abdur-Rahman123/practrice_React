import React, { Component } from 'react';
import axios from 'axios';
class Country extends Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => {
          console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Country;