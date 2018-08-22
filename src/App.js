import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bill', age: 31 },
      { name: 'Fabian', age: 26 },
      { name: 'Kei', age: 37 }
    ]
  }

  switchNameHandler = () => {
     // DON'T DO THIS: this.state.persons[0].name = "Billiam";
     this.setState({persons: [
      { name: 'Billiam', age: 31 },
      { name: 'Fabian the fit', age: 26 },
      { name: 'Kei the krosser', age: 37 }
    ]})
  };

  render() {
    return (
      <div className="App">
        <h1>Awesome stuff here!!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;