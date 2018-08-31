import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);

    this.lastPersonRef = React.createRef();

    console.log('[Persons.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] inside render()');
    return this.props.persons.map((person, index) =>
      (
        <Person
          click={() => { this.props.clicked(index); }}
          name={person.name}
          age={person.age}
          ref={this.lastPersonRef}
          key={person.id}
          position={index}
          changed={(event) => { this.props.changed(event, person.id) }}
        >
          My Hobbies: Milruck
          </Person>
    ));
  }
}

export default Persons;