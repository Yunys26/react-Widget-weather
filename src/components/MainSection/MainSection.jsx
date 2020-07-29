import React, { Component } from 'react';
import './style-MainSection.css';
import MainForm from './MainForm/MainForm';

class MainSection extends Component {
    constructor () {
        super();
        this.state = { 
            data: null,
        };

        this.submitInfoCountry = this.submitInfoCountry.bind(this);
    };
    // Получить данные с формы 
    submitInfoCountry = (e) => {
        e.preventDefault();
        // this.setState( state => ({
        //     data: "texts"
        // }));
    };
    // надо понять как перекидывать данные с компонентов input и забиратьс формы данные input и изменять state и получать их тут 
    // что бы сделать запрос на апи
    render () {
        console.log(this.state);
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
                <MainForm/>
            </main>
        );
    }
};
export default MainSection;