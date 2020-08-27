import React from 'react';
import { action, extendObservable, runInAction } from "mobx";
import axios from 'axios';
import ButtonSend from '../components/MainSection/ButtonSend';
import Modal from '../components/MainSection/Modal';
class Store {
    // Наблюдаемые данные
    constructor() {
        extendObservable(this, {
            inputValue: '',
            result: null,
            id: 0,
            data: [],
            tabsDeleteCity: [],
            tabsActiveCity: [],
            // objStyles: {
            //     // true: buttonDel, false:
            //     buttonOn: true
            // },
        })
    }
    // Отображение в таб "все"
    get addTabsActive() {
        return this.tabsActiveCity.map( ( elementArray, index ) => <p key={index}>{elementArray.cityList}</p> );
    }
    // Отображение в таб "все"
    get addTabsDelete () {
        return this.tabsDeleteCity.map( ( elementArray, index ) => <p key={index}>{elementArray.cityList}</p> );
    }
    // Отображение в таб "все"
    get addTabsCityAll() {
        return this.data.map( (elementArray, index) => <p key={index}>{elementArray.name}</p> );
    }
    // Рендерит строку таблицы 
    get addDataTable() {
        return this.data.map((elementArray, index) =>
            <tr key={elementArray.key} id={elementArray.key}>
                <th>{elementArray.name}</th>
                <th className="anim">{Math.round(elementArray.temp) - 273}&#176;</th>
                <th>
                    {/* <button className="upButton" onClick={this.up}>Вверх</button> */}
                    <ButtonSend 
                        id={`upButton${elementArray.key}`}
                        upButton
                        valueButton="Вверх"
                        clickButton={this.up.bind(this, elementArray.name)}
                    />
                </th>
                <th>
                    {/* <button className="downButton" onClick={this.down}>Вниз</button> */}
                    <ButtonSend
                        downButton
                        valueButton="Вниз"
                        clickButton={this.down}
                    />
                </th>
                <th key={elementArray.key}>
                    <ButtonSend
                        modalUseDelete
                        valueButton="Удалить"
                        clickButton={this.modalOpen}
                    />
                    <ButtonSend
                        modalUseReturn
                        valueButton="Восстановить"
                        clickButton={this.returnActive.bind(this, elementArray.name)}
                    />
                    {/* <button className="modalUseDelete" onClick={this.modalOpen}>Удалить</button>
                    <button className="modalUseReturn" onClick={this.returnActive}>Восстановить</button> */}
                </th>
                <Modal
                    nameCity={elementArray.name}
                    clickButton={this.deleteCity.bind(this, elementArray.name)}
                />
            </tr>
        );
    };

    // Отображение таб "Активные"
    @action returnActive = (name) => {
        // В активных отображается все города котоыре не были удалены в копии массива, если удаляет возвращается на то же место либо доавляется в конец 
        // console.log("Восстановлен");
        // this.tabsDeleteCity.splice(i, 1)
        // if (this.tabsActiveCity)
        this.tabsActiveCity.push({cityList: name});
        for (let i = 0; i < this.tabsDeleteCity.length; i++) {
            if (this.tabsDeleteCity[i].cityList === name) this.tabsDeleteCity.splice(i, 1);
        }
        document.querySelector('.modalUseDelete').style.display = 'block';
        document.querySelector('.modalUseReturn').style.display = 'none';
    };
    // Отображение таб "Удаленные"
    @action deleteCity = (name) => {
        this.tabsDeleteCity.push({cityList: name});
        for (let i = 0; i < this.tabsActiveCity.length; i++) {
            if (this.tabsActiveCity[i].cityList === name) this.tabsActiveCity.splice(i, 1);
        }
        document.querySelector('.modalUseDelete').style.display = 'none';
        document.querySelector('.modalUseReturn').style.display = 'block';
        document.querySelector('.modal').style.display = 'none';
    };
    // // Закрывает модальное окно 
    modalClose = (e) => {
        if (e.target === document.querySelector('.modal') || e.target === document.querySelector('.modalClose')) document.querySelector('.modal').style.display = 'none';
    };
    // Открывает моадльное окно
    modalOpen = () => {
        document.querySelector('.modal').style.display = 'block';
    };
    // Перемещение по таблице вверх
    @action up = (name, e) => {
        // если таргерт равен id то что то выводит
        // for (let key = 0; key < this.data.length - 1; key++) {
        //     if (e.target = document.getElementById(`upButton ${key}`)) console.log(1);
        // }
        // this.data.filter( function(item, index) {
        //     return console.log(item);
        // } );
        // this.data.forEach( (element, index) => {
        //     if (index > 1 && index < this.data.length) {
        //         console.log("yes")
        //     }
        // });
        // if (this.data['0']) {
        //     console.log(1);
        // } else if ( this.data[`${this.data.length - 1}`] ) {
        //     console.log(2);
        // }
        // for (let i = 0; i < this.data.length - 1; i++) {


        // }

        // for (let i = 0; i < this.data.length - 1; i++) {
        //     if (this.data[0].key === `${this.data[i].key}`) console.log(1);
        //     if (this.data[i].key === ( this.data.length - (this.data.length - 1) )) console.log(2);
        //     if (this.data[this.data.length - 1].key === `${this.data[i]}`) console.log(3)
        //     // if (e.target === document.getElementById('upButton0')) console.log(1);
        // }

        // console.log(e.target)
        // console.log(document.getElementById('upButton0'))
        // console.log(this.data)
        // return (this.data[0]) ? console.log(1) : (this.data[this.data.lenght - 1]) ? console.log(2) : this.data.push(this.data.shift());
        if (this.data.length === 2) {
            return console.log('1');
        } else if (this.data.length >= 3) {
            this.data.push(this.data.shift());
        }
        // if (this.data[0]) console.log(1);
        // if (this.data)
    }
    // Перемещение по таблице вниз
    @action down = () => {
        if (this.data.length === 2) {
            return console.log('1');
        } else if (this.data.length >= 3) {
            this.data.unshift(this.data.pop());
        }
    };
    // Изменяет состояние инпута 
    @action handleDataInput = (e) => {
        return this.inputValue = e.target.value;
    };
    //  При нажатии нa enter
    @action handleKeyPress = (e) => {
        if (e.key === "Enter") return this.formSendCoutry();
    };

    // Осуществляет запрос на api и получает ответ, при клике на кнопку
    @action formSendCoutry = async (e) => {
        e.preventDefault();
        // `https://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=bcd470ab4ddba97b244ed20fafeb41a7`
        /* Через библу axios попроще, потому что просто приходит объект */
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&appid=bcd470ab4ddba97b244ed20fafeb41a7`)
            .then(res => {
                runInAction(() => {
                    this.result = res.data;
                    this.data.push( { id: res.data.id, key: `${this.id++}`, name: res.data.name, temp: res.data.main.temp } )
                })
                console.log(this.data)
                console.log(res.data);
                // console.log(this.nameCountry, this.temp);
                // return this.tesData = {name: res.data.name, temp: res.data.main.temp};
            })
            .catch((error) => {
                // handle error
                return console.log("Response errror" + error);
            })

        document.querySelector('.formSendCoutry').reset();
    };

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

    // написать обработку для неправильного ответа от сервера 
}

export default new Store();
