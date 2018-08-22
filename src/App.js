import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bill', age: 31 },
      { name: 'Fabian', age: 26 },
      { name: 'Kei', age: 37 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Bill', age: 31 },
      { name: event.target.value, age: 26 },
      { name: 'Kei', age: 37 }
    ]})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => {this.deletePersonHandler(index);}}
                changed={this.nameChangedHandler}
              >
                My Hobbies: Milruck  
              </Person>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Awesome stuff here!!!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;