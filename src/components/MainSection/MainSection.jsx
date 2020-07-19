import React from 'react';
import './style-MainSection.css';
import Tabs from './Tabs/Tabs';
import Table from './Table/Table';
import Input from './Input/Input';

const MainSection = (props) => {
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
            {/* <div className="main__form"> */}
                <Input />
                <Tabs />
                <Table />
            {/* </div> */}   
        </main>
    );
};
export default MainSection;