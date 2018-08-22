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

  switchNameHandler = (newName) => {
     // DON'T DO THIS: this.state.persons[0].name = "Billiam";
     this.setState({persons: [
      { name: newName, age: 31 },
      { name: 'Fabian', age: 26 },
      { name: 'Kei', age: 37 }
    ]})
  };

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Bill', age: 31 },
      { name: event.target.value, age: 26 },
      { name: 'Kei', age: 37 }
    ]})
  };

  render() {
    return (
      <div className="App">
        <h1>Awesome stuff here!!!</h1>
        <button onClick={() => this.switchNameHandler('Billiam')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Bill!')}
          changed={this.nameChangedHandler}>
          My Hobbies: Milruck  
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;