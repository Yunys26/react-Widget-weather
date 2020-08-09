import React, { Component } from 'react';
import './style-input.css';
// import store from '../../../store/store';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        const props = this.props
        // const { inputValue, handleDataInput  } = store;
        return (
            <input ref={props.ref} onChange={props.onChange} value={props.text} name={props.name} type={props.type} placeholder={props.placeholder}/>
        );
    }
}

export default Input;
