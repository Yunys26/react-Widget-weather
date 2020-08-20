import React, { Component } from 'react';
import classNames from 'classnames';
import './style-button.css'
class ButtonSend extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        const props = this.props
        return (
            <button onClick={this.props.clickButton}
                className={classNames('button', {
                    buttonSend: props.buttonSend,
                    upButton: props.upButton,
                    downButton: props.downButton,
                    modalUseDelete: props.modalUseDelete,
                    modalUseReturn: props.modalUseReturn,
                })}>
                {this.props.valueButton}
                </button>
        );
    };
}

export default ButtonSend;