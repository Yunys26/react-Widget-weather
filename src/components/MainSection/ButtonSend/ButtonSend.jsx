import React, { Component } from 'react';
import './style-button.css'
class ButtonSend extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };
    render () {
        return (
        <button onClick={this.props.clickButton} className={this.props.className}>{this.props.valueButton}</button>
        );
    };
}

export default ButtonSend;