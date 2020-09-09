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
            // Tabs Del
            tabsDeleteCity: [],
            // Tabs Active
            tabsActiveCity: [],
            // Modal
            isOpenModalDeleCountry: false,
            isOpenModalUpdateTable: false,
        })
    }
    // Отображение в таб "Active"
    get addTabsActive() {
        return this.tabsActiveCity.map((elementArray, index) => <p key={index}>{elementArray.cityList}</p>);
    }
    // Отображение в таб "Delete"
    get addTabsDelete() {
        return this.tabsDeleteCity.map((elementArray, index) => <p key={index}>{elementArray.cityList}</p>);
    }
    // Отображение в таб "все"
    get addTabsCityAll() {
        return this.data.map((elementArray, index) => <p key={index}>{elementArray.name}</p>);
    }
    // Рендерит строку таблицы 
    get addDataTable() {
        return this.data.map((elementArray, index) =>
            <tr onClick={this.modalOpen.bind(this, elementArray.name, index)} key={elementArray.key} id={elementArray.key}>
                <th className="cityName">{elementArray.name}</th>
                <th className="anim">{Math.round(elementArray.temp) - 273}&#176;</th>
                <th>
                    {/* <button className="upButton" onClick={this.up}>Вверх</button> */}
                    <ButtonSend
                        id={`upButton${elementArray.key}`}
                        upButton
                        valueButton="Вверх"
                        clickButton={this.up.bind(this, index)}
                    />
                </th>
                <th>
                    {/* <button className="downButton" onClick={this.down}>Вниз</button> */}
                    <ButtonSend
                        id={`donwButton${elementArray.key}`}
                        downButton
                        valueButton="Вниз"
                        clickButton={this.down.bind(this, index)}
                    />
                </th>
                <th key={elementArray.key}>
                    <ButtonSend
                        id={`openMod${index}`}
                        modalUseDelete
                        valueButton="Удалить"
                        clickButton={this.modalOpen.bind(this, elementArray.name, index)}
                    />
                    <ButtonSend
                        id="closeMod"
                        modalUseReturn
                        valueButton="Восстановить"
                        clickButton={this.returnActive.bind(this, elementArray.name)}
                    />
                    {/* <button className="modalUseDelete" onClick={this.modalOpen}>Удалить</button>
                    <button className="modalUseReturn" onClick={this.returnActive}>Восстановить</button> */}
                </th>
                {/* <Modal
                    key={elementArray.key}
                    nameCity={elementArray.name}
                    clickButton={this.deleteCity.bind(this, elementArray.name)}
                /> */}
            </tr>
        );
    };
    // Отображение таб "Активные", при нажатии на кнопку восстановить
    @action returnActive = (name) => {
        document.querySelector('.modalUseDelete').style.display = 'block';
        document.querySelector('.modalUseReturn').style.display = 'none';
        // В активных отображается все города котоыре не были удалены в копии массива, если удаляет возвращается на то же место либо доавляется в конец 
        this.tabsActiveCity.push({ cityList: name });
        for (let i = 0; i < this.tabsDeleteCity.length; i++) {
            if (this.tabsDeleteCity[i].cityList === name) this.tabsDeleteCity.splice(i, 1);
        }

    };
    // Отображение таб "Удаленные", при нажати на кнопку "удалить город" в моадльном окне
    @action deleteCity = (name) => {
        console.log(name)
        this.isOpenModalDeleCountry = false;
        document.querySelector('.modalUseDelete').style.display = 'none';
        document.querySelector('.modalUseReturn').style.display = 'block';
        this.tabsDeleteCity.push({ cityList: name });
        for (let i = 0; i < this.tabsActiveCity.length; i++) {
            if (this.tabsActiveCity[i].cityList === name) this.tabsActiveCity.splice(i, 1);
        }
    };
    // Логика отображения модального окна
    @action modalOpen = (name, index, e) => {
        if (e.target === document.getElementById(`openMod${index}`)) {
            this.isOpenModalDeleCountry = true;
            // this.simpleMet.bind(this, name, index);
        } else if (e.target === document.querySelector('.anim') || e.target === document.querySelector('.cityName')) this.isOpenModalUpdateTable = true;
        console.log(this.isOpenModalDeleCountry);
        // return <Modal />;

    };
    // // Закрывает модальное окно 
    @action modalClose = (e) => {
        if (e.target === document.querySelector('.modal') || e.target === document.querySelector('.modalClose')) {
            this.isOpenModalDeleCountry = false;
            this.isOpenModalUpdateTable = false;
        }
    };
    // get createModal
    createModalDeleCountry(city) {
        // Добавлены имя города и удаление по кнопке
        console.log(city[0])
        return (this.isOpenModalDeleCountry &&
            <Modal>
                <div onClick={this.modalClose} className="modal">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <span className="modalClose">&times;</span>
                            <img className="sadSunImg" src="https://img.icons8.com/clouds/100/000000/sad-sun.png" alt="" />
                        </div>
                        <div className="modalBody">
                            <p>Удалить <span>{city[0].name}</span> из списка ?</p>
                            <p>Ещё другой текст...</p>
                        </div>
                        <div className="modalFooter">
                            <button className="button" onClick={this.deleteCity.bind(this, city[0].name)}>Удалить город</button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
        // return this.isOpenModalDeleCountry && <Modal nameCity={city[0].name}  clickButton={this.deleteCity.bind(this, city[0].name)}/>
    }
    createModalUpdateTable(dataTable) {
        return (this.isOpenModalUpdateTable &&
            <Modal>
                <div onClick={this.modalClose} className="modal">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <span className="modalClose">&times;</span>
                            <img className="sadSunImg" src="https://img.icons8.com/clouds/100/000000/sad-sun.png" alt="" />
                        </div>
                        <div className="modalBody">
                            <input defaultValue={dataTable[0].name}/>
                            <input defaultValue={dataTable[0].temp}/>
                        </div>
                        <div className="modalFooter">
                            {/* <h3>Футер модального окна</h3> */}
                            <ButtonSend clickButton={this.deleteCity.bind()} className="buttonDelete" valueButton="Удалить город" />
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
    // createModal (e, name) {
    //     console.log(e.target)
    //     return this.isOpenModalDeleCountry && <Modal nameCity={name} clickButton={this.deleteCity.bind(this, name)}/>
    // }
    // Перемещение по таблице вверх
    @action up = (index) => {
        // if (this.data.length === 2) {
        //     // return console.log('1');
        // } else if (this.data.length >= 3) {
        //     this.data.push(this.data.shift());
        // }
        return (index === 0) ? console.log(1) : (index === this.data.length - 1 && this.data.length - 1 === 1) ? console.log(0) : this.data.push(this.data.shift());;
    }
    // Перемещение по таблице вниз
    @action down = (index) => {
        // if (this.data.length === 2) {
        //     return console.log('1');
        // } else if (this.data.length >= 3) {
        //     this.data.unshift(this.data.pop());
        // }
        return (index === this.data.length - 1) ? console.log(1) : (index === 0 && this.data.length - 1 === 1) ? console.log(0) : this.data.unshift(this.data.pop());
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
                    this.data.push({ key: `${this.id++}`, name: res.data.name, temp: res.data.main.temp })
                })
                console.log(this.data)
                console.log(res.data);
                // console.log(this.nameCountry, this.temp);
                // return this.tesData = {name: res.data.name, temp: res.data.main.temp};
            })
            .catch((error) => {
                if (error.response) {
                    alert("Не существует такого города");
                } else if (error.request) {
                    alert("Данные не отправлены");
                }
                // handle error
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
