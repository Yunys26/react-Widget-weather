import React, { Component } from 'react';
import './style-input.css';
import { observer } from 'mobx-react';
// import store from '../../../store/store';

@observer
class Input extends Component {
    render () {
        const props = this.props
        return (
            <input onChange={props.onChange} defaultValue={props.text} name={props.name} type={props.type} placeholder={props.placeholder}/>
        );
    }
}

export default Input;
