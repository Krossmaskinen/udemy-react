import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome stuff here!!!</h1>
        <Person name="Bill" age="31" />
        <Person name="Fabian" age="26">My Hobbies: Milruck</Person>
        <Person name="Kei" age="37" />
      </div>
    );
  }
}

export default App;