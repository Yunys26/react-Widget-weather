import React, { Component } from 'react';
// Libs
import { observer } from 'mobx-react';
import classNames from 'classnames';
// import store from '../../../store/store';

@observer
class Input extends Component {

    render() {
        const props = this.props
        return (
            <input
                onChange={props.onChange}
                defaultValue={props.text}
                className={classNames('input', {
                    inputValueTemp: props.inputValueTemp,
                    inputValueCity: props.inputValueCity,
                })}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
        );
    }
}

export default Input;
