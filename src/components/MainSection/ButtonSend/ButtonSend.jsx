import React, { Component } from 'react';
import { observer } from 'mobx-react';

class ButtonSend extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
        <button>Send</button>
        );

    };

}

export default observer(ButtonSend);