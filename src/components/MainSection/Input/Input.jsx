import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import store from '../../../store';

class Input extends Component {
    constructor () {
        super();
        this.state = {
            text: '',
        };
        const objData = {
            data: this.state.text,
        }
        this.handleDataInput = this.handleDataInput.bind(this);
        console.log(this.state);
        console.log(objData);
    }

    handleDataInput = (e) => {
        const target = e.target;
        const name = target.name;

        this.setState({ [name]: target.value});
        // очищать после имзенения состония input
    }

    // добавить очищение  инпута, возможно через форму или в самом инпуте, но лучше через событие клик по кнопке 
    render () {
        console.log(this.state)
        return (
            <input onChange={this.handleDataInput} value={this.state.text} name="text" type="text" placeholder="Enter your city..."/>
        );
    }
}

export default observer(Input);


   // Нужно как то отравлять данные в таблицу, и получать ответ от апи 
    // constructor (props) {
    //     super (props);
        
    //     this.state = {
    //         text: ''
    //     };
    //     this.inputValue = {
    //         inputText: null
    //     };
    // }


    // change = (event) => {
    //     const {name, value} = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    
    // submit = (event) => {
    //     event.preventDefault();
    //     // Присваиваем в объект значения input
    //     this.inputValue.inputText = this.state.text;
    //     // // очищаем input
    //     // this.refWae.current.value = '';
    //     // console.log(this.refWae.current.value);
    //     console.log(this.inputValue);
    // };
    // // Ссылка на input (создание ссылки на input)
    // refWae = React.createRef();
    // // bcd470ab4ddba97b244ed20fafeb41a7
    // // componentDidMount() {
    // //     let response = null
    // //     const api = "bcd470ab4ddba97b244ed20fafeb41a7";
    // //     fetch("api.openweathermap.org/data/2.5/weather?q="+this.inputVal.val+"&appid="+api).then((response) => {
    // //         retrun response.json();
    // //     })
    // // }
    // render () {
    //     console.log(this.inputVal)
    //     const { text } = this.state;
    //     return (
    //         <div className="main__form">
    //             <form onSubmit={this.submit} name="form">
    //                 <input ref={this.refWae} name="text" value={text} onChange={this.change} placeholder="Enter your city..."/>
    //                 <button>Send</button>
    //                 <p onChange={this.change}>{text}</p>
    //                 <p>{this.props.name}</p>
    //             </form>
    //             <Table textValue={this.inputValue.inputText}/>
    //             <Tabs />
    //         </div>
    //     );
    // }