import React, { Component } from 'react';

class Post extends Component {
    constructor() {
      super()
      this.state = {
          title:" ",
          body:" ",
          useid:" "
      }
    }

    render() {
        return (
            <div>
                <form>
                    <input name="title" type="text">Title</input>
                    <input name="body" type="text">Body</input>
                    <input name="userid" type="text">UserId</input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Post;