import React, { Component } from 'react';
// Libs
import { observer } from 'mobx-react';
// Components
import Input from './Input';
import ButtonSend from './ButtonSend';
import Table from './Table';
import Tabs from './Tabs';
import store from '../../store/store';

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
                {store.createModalDeleCountry(store.data)}
                {store.createModalUpdateTable(store.data)}
                {/* <ModalLib/> */}
                <Tabs/>
            </div>
        );
    };
}

export default MainForm;