import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();

        // console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        // console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        // console.log('[Person.js] inside componentDidMount()');
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        // console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={this.inputElement}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);