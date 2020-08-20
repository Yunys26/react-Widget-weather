import React, { Component } from 'react';
import './style-main-form.css';
import Input from '../Input/Input';
import ButtonSend from '../ButtonSend/ButtonSend';
import Table from '../Table/Table';
import Tabs from '../Tabs/Tabs';
import { observer } from 'mobx-react';
import store from '../../../store/store';
import Modal from '../Modal/Modal';

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
                <Tabs/>
                <Modal/>
            </div>
        );
    };
}

export default MainForm;