import React, { Component } from 'react';
import Input from '../Input/Input';
import ButtonSend from '../ButtonSend/ButtonSend';
import Table from '../Table/Table';
import Tabs from '../Tabs/Tabs';

class MainForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            text: '',
            result: null,
        };

        this.handleDataInput = this.handleDataInput.bind(this);
        this.formSendCoutry = this.formSendCoutry.bind(this);
    };
    // Изменяет состояние инпута 
    handleDataInput = (e) => {
        this.setState({ text: e.target.value});
    };

    // Осуществляет запрос на api и получает ответ 
    formSendCoutry = (e) => {
        e.preventDefault();
        console.log(this.state);
        // axios.post(`api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`)
        //     .then( response => {
        //         console.log(response);
        //     })
        //     .catch( error => {
        //         console.log(error);
        //     })
        
        fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`,)
            .then( response => {
                this.setState({result: response.json()});
                return console.log(response);
            })
            .catch( error => {
                console.log('Request failed', error);
            })
    };



    render () {
        console.log(this.state);
        const { text }  = this.state;
        return (
            <div className="main__form">
                <form onSubmit={this.formSendCoutry} name="FormSendCoutry" className="FormSendCoutry">
                    <Input
                        onChange={this.handleDataInput}
                        value={ text }
                        name="text" 
                        type="text" 
                        placeholder="Enter your city..."
                    />
                    <ButtonSend />
                </form>
                <Table />
                <Tabs />
            </div>
        );
    };
}

export default MainForm;