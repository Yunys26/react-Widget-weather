import React, { Component } from 'react';
// Libs
import classNames from 'classnames';
import { observer } from 'mobx-react';

@observer
class ButtonSend extends Component {
    
    render() {
        const props = this.props;
        return (
            <button
                id={props.id}
                onClick={props.clickButton}
                className={classNames('button', {
                    buttonSend: props.buttonSend,
                    upButton: props.upButton,
                    downButton: props.downButton,
                    modalUseDelete: props.modalUseDelete,
                    modalUseReturn: props.modalUseReturn,
                })}>
                {props.valueButton}
            </button>
        );
    };
}

export default ButtonSend;