import React from 'react';
import { action, extendObservable, computed, runInAction } from "mobx";
import axios from 'axios';
import ButtonSend from '../components/MainSection/ButtonSend';
// import { element } from 'prop-types';
class Store {
    // Наблюдаемые данные
    constructor() {
        extendObservable(this, {
            inputValue: '',
            result: null,
            id: 0,
            data: [],
            objStyles: {
                // true: buttonDel, false:
                buttonOn: true
            },
        })
    }

    // Отображение таб "Активные"
    @action returnActive = (e) => {
        e.preventDefault();
        // В активных отображается все города котоыре не были удалены в копии массива, если удаляет возвращается на то же место либо доавляется в конец 
        console.log("Восстановлен");
        document.querySelector('.modalUseDelete').style.display = 'block';
        document.querySelector('.modalUseReturn').style.display = 'none';
    };
    // Отображение таб "Удаленные"
    @action deleteCity = (e) => {
        e.preventDefault();
        // удляет по клику делает копию массива и удаляет данные элемент по назваани города из массив в котором объекты
        console.log("Удален");
        document.querySelector('.modalUseDelete').style.display = 'none';
        document.querySelector('.modalUseReturn').style.display = 'block';
        document.querySelector('.modal').style.display = 'none';
    };
    // Отображение в таб "все"
    @computed get addTabsCityAll() {
        return this.data.map((elementArray) => <p key={Math.round(Math.random())}>{elementArray.name}</p>);
    }
    // Рендерит строку таблицы 
    @computed get addDataTable() {
        return this.data.map((elementArray, index) =>
            <tr key={elementArray.key} id={elementArray.key}>
                <th>{elementArray.name}</th>
                <th className="anim">{Math.round(elementArray.temp) - 273}&#176;</th>
                <th>
                    {/* <button className="upButton" onClick={this.up}>Вверх</button> */}
                    <ButtonSend
                        upButton
                        valueButton="Вверх"
                        clickButton={this.up}
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
                        key={elementArray.key}
                        valueButton="Удалить"
                        clickButton={this.modalOpen}
                    />
                    <ButtonSend
                        modalUseReturn
                        key={elementArray.key}
                        valueButton="Восстановить"
                        clickButton={this.returnActive}
                    />
                    {/* <button className="modalUseDelete" onClick={this.modalOpen}>Удалить</button>
                    <button className="modalUseReturn" onClick={this.returnActive}>Восстановить</button> */}
                </th>

            </tr>
        );
    };
    // @action modalClose = (e) => {
    //     e.preventDefault();
    // }
    // @action modalOpen = (e) => {
    //     e.preventDefault();
    // }
    // // Закрывает модальное окно 
    @action modalClose = (e) => {
        e.preventDefault();
        if (e.target === document.querySelector('.modal') || e.target === document.querySelector('.modalClose')) document.querySelector('.modal').style.display = 'none';
    };
    // Открывает моадльное окно
    @action modalOpen = (e) => {
        e.preventDefault();
        document.querySelector('.modal').style.display = 'block';
    };
    // Перемещение по таблице вверх
    @action up = (e) => {
        e.preventDefault();
        if (this.data.length === 2) {
            return console.log('1');
        } else if (this.data.length >= 3) {
            this.data.push(this.data.shift());
        }
    }
    // Перемещение по таблице вниз
    @action down = (e) => {
        e.preventDefault();
        if (this.data.length === 2) {
            return console.log('1');
        } else if (this.data.length >= 3) {
            this.data.unshift(this.data.pop());
        }
    };
    // Изменяет состояние инпута 
    @action handleDataInput = (e) => {
        e.preventDefault();
        return this.inputValue = e.target.value;
    };
    //  При нажатии нa enter
    @action handleKeyPress = (e) => {
        e.preventDefault();
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
                    this.data.push({ id: res.data.id, key: `${this.id++}`, name: res.data.name, temp: res.data.main.temp })
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
