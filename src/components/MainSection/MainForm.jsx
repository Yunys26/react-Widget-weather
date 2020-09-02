import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ModalLib from 'react-modal';
import store from '../../store/store';
import Input from './Input';
import ButtonSend from './ButtonSend';
import Table from './Table';
import Tabs from './Tabs';
import Modal from './Modal';


@observer
class MainForm extends Component {

    render () {
        // console.log(this.state);
        return (
            <div className="main__form">
                <form onSubmit={store.formSendCoutry} className="formSendCoutry" name="FormSendCoutry">
                    <Input
                        onChange={store.handleDataInput}
                        value={store.inputValue}
                        name="text" 
                        type="text" 
                        placeholder="Enter your city..."
                    />
                    <ButtonSend buttonSend valueButton="Send"/>
                </form>
                <div className="main__table" name="table">
                    <Table
                        // dataApi={store.result}
                    />
                </div>
                <ModalLib/>
                <Tabs/>
            </div>
        );
    };
}

export default MainForm;