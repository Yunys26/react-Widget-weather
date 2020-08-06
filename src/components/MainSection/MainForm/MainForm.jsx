import React, { Component } from 'react';
import Input from '../Input/Input';
import ButtonSend from '../ButtonSend/ButtonSend';
import Table from '../Table/Table';
import Tabs from '../Tabs/Tabs';
import { observer } from 'mobx-react';
import axios from 'axios';

class MainForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            text: null,
            result: null,
        };
        console.log(this.state.result);
        this.handleDataInput = this.handleDataInput.bind(this);
        this.formSendCoutry = this.formSendCoutry.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };
    // Изменяет состояние инпута 
    handleDataInput = (e) => {
        this.setState({ text: e.target.value});
    };
    //  При нажатии нa enter
    handleKeyPress = (e) => {
        e.preventDefault();
        if (e.key === "Enter") this.formSendCoutry(e);
    };

    // Осуществляет запрос на api и получает ответ, при клике на кнопку
    formSendCoutry = async (e) => {
        e.preventDefault();

        // `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`
        /* Через библу axios попроще, потому что просто приходит объект */
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`)    
            .then( res => {
                console.log(res)
                // чтобы создавать аждый раз запрос, можно создвавать ему уникальное имя (без mobx)
                this.setState( state => {
                    return {result: state.result = res.data};
                })
            })

            .catch( (error) => {
                // handle error
                console.log(error);
            })
        // очищение поля, надо придумать что то оригинальней
        // document.getElementById('FormSendCoutry').reset();
        
        /* Запрос с помощью fetch, но лучше его не использовать в связке react + redux  
            сначала с помощью отправлял данные, в итоге понял что такое promise разобрался в нем 
            и теперь понимаю как принимать данные если они находятся в Promise
        */
        // await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`,)
        //     .then( response => response.json() )
        //     .then( result => {

        //         this.setState( state => {
        //             return {result: state.result = result.main};
        //         })
        //     })
        //     .catch( error => {
        //         console.log('Request failed', error);
        //     })
    };

    // написать обработку для неправильного ответа от сервера 

    // добавить очищение  инпута, возможно через форму или в самом инпуте

    render () {
        // console.log(this.state);
        const { text }  = this.state;
        return (
            <div className="main__form">
                <form onSubmit={this.formSendCoutry} id="FormSendCoutry" name="FormSendCoutry" className="FormSendCoutry">
                    <Input
                        onChange={this.handleDataInput}
                        value={ text }
                        name="text" 
                        type="text" 
                        placeholder="Enter your city..."
                    />
                    <ButtonSend onKeyPress={this.handleKeyPress} />
                </form>
                <Table
                    dataApi={this.state.result}
                />
                <Tabs />
            </div>
        );
    };
}

export default observer(MainForm);