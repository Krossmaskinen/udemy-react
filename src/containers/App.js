import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../components/hoc/Aux';
import withClass from '../components/hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] inside getDerivedStateFromProps()',
      nextProps,
      prevState
    );

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate()')
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()')
  }

  state = {
    persons: [
      { id: '239pg1', name: 'Bill', age: 31 },
      { id: '239pg2', name: 'Fabian', age: 26 },
      { id: '239pg3', name: 'Kei', age: 37 }
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandlerMethod = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.nameChangedHandler}
        clicked={this.deletePersonHandler}
        />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandlerMethod}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);