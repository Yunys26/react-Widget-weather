import React, { Component } from 'react';
// Libs
import { observer } from 'mobx-react';

@observer
class Modal extends Component {

    render () {
        const props = this.props;
        return (
            props.children
        );
    };
} 
export default Modal;