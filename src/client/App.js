import React, { Component } from 'react';
import Axios from 'axios';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    Axios.get('/api',{
      headers:{
        'authorization':'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjE0ZGY1OWFiMGYwMTE4Njg2YTIyMzAiLCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IiQyYSQxMCRZdjdvNVVzQk9yTUpOZS4wbjAwS2FlYlRvNU1SbXhYRkx3RU1acFpKZVl3V3kxT0tKczJxVyIsIl9fdiI6MCwiaWF0IjoxNTI4MTc0ODg0fQ.z33YtGItvecAtCzD6mlZ89OS5OAmuk8BRN3lRvTCfWk'
      }
    })
    .then(res => this.setState({
        username:res.data
      })
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
