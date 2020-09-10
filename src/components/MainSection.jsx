import React, { Component } from 'react';
// Libs
import { observer } from 'mobx-react';
// Components
import MainForm from './MainSection/MainForm';

@observer
class MainSection extends Component {

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
                <MainForm />
            </main>
        );
    }
};
export default MainSection;