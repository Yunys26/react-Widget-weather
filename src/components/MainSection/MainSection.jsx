import React, { Component } from 'react';
import './style-MainSection.css';
import Tabs from './Tabs/Tabs';
import Table from './Table/Table';
import Input from './Input/Input';
import ButtonSend from './ButtonSend/ButtonSend';

class MainSection extends Component {
    constructor () {
        super();
        this.state = {

        };
    };
    // Получить данные с формы 
    submitInfoCountry = (e) => {
        e.preventDefault();
    };
    
    render () {
        return (
            <main className="main">
                <div className="main__icon">
                    {/* <img src={clound.cloud.svg} alt=""></img> */}
                    {/* <img src={'./iconMain/cloudy.svg'} alt=""></img>
                    <img src={'./iconMain/moon.svg'} alt=""></img>
                    <img src={'./iconMain/rain.svg'} alt=""></img>
                    <img src={'./iconMain/storm.svg'} alt=""></img>
                    <img src={'./iconMain/sun.svg'} alt=""></img> */}
                </div>
                <div className="main__form">
                    <form onSubmit={this.submitInfoCountry} name="FormSendCoutry" className="FormSendCoutry">
                        <Input/>
                        <ButtonSend/>
                    </form>
                    <Table/>
                    <Tabs/>
                </div>
                {/* <Tabs />
                <Table />  */}
            </main>
        );
    }
};
export default MainSection;