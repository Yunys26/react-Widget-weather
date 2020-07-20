import React, { Component } from 'react';

// const Input = (props) => {
        
//     return (
//         <form>
//             <input placeholder="Enter your city..." width/>
//             <button className="">Send</button>
//         </form>
//     );
// };

class Input extends Component {
    // Нужно как то отравлять данные в таблицу, и получать ответ от апи 
    // constructor (props) {
    //     super (props);
        
    //     this.state = {
    //         text: ''
    //     }
    // }
    state = {
        text: '',
        error: null,
        isLoaded: false,
        items: []
    }
    obj = {
        val: '',
    }

    refWae = React.createRef();

    change = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    
    submit = (event) => {
        event.preventDefault();
        console.log(this.refWae.current.value);
        console.log(this.obj);
        this.obj.val = this.refWae.current.value;
    };
    // bcd470ab4ddba97b244ed20fafeb41a7
    // componentDidMount() {
    //     fetch (`api.openweathermap.org/data/2.5/weather?q=${}&appid=${bcd470ab4ddba97b244ed20fafeb41a7}`).then(res => res.json()).then((result) => {
    //         this.setState({
    //             isLoaded: true,
    //             items: result.items
    //         })

    //     });
    // }


    render () {
        const { text } = this.state;
        // const { valInput } = this.obj;
        // console.log({valInput});
        return (
                <form onSubmit={this.submit} name="form">
                    <input ref={this.refWae} name="text" value={text} onChange={this.change} placeholder="Enter your city..."/>
                    <button>Send</button>
                    <p onChange={this.change}>{text}</p>
                </form>
        );
    }
}

export default Input;