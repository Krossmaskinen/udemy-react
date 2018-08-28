import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '239pg1', name: 'Bill', age: 31 },
      { id: '239pg2', name: 'Fabian', age: 26 },
      { id: '239pg3', name: 'Kei', age: 37 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({persons});
  };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let assignedClasses = [];
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary
                key={person.id}
              >
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => {this.deletePersonHandler(index);}}
                  changed={(event) => {this.nameChangedHandler(event, person.id)}}
                >
                  My Hobbies: Milruck  
                </Person>
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    assignedClasses = assignedClasses.join(' ');

    return (
      <div className={classes.App}>
        <h1>Awesome stuff here!!!</h1>
        <p className={assignedClasses}>It's alive</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;