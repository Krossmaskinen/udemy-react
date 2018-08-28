import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    assignedClasses = assignedClasses.join(' ');

    return (
        <div className={classes.Cockpit}>
            <h1>Awesome stuff here!!!</h1>
            <p className={assignedClasses}>It's alive</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;