import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}
        />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;