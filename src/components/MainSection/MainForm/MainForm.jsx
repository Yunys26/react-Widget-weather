import React, { Component } from 'react';

class MainForm extends Component {
    constructor (props) {
        super (props);
    };
    InpUTT = () => {
        return (
            <div>111</div>
        );
    };
    render () {
        return (
            <div className="main__form">
                <form name="FormSendCoutry" className="FormSendCoutry">
                    <this.InpUTT/>
                    {/* <ButtonSend/> */}
                </form>
            {/* <Table/>
            <Tabs/> */}
        </div>
        );
    };
}

export default MainForm;