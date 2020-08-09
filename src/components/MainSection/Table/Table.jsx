import React, { Component } from 'react';
// Библиотека для проверки данных на тип
// import PropTypes from 'prop-types';
import './style-table.module.css';
import store from '../../../store/store';
import { observer } from 'mobx-react';

@observer
class Table extends Component {
    /*Данные которые придут с апи можно отображать в таблице с помощью
    map, принимать массив данныъ, присаивать его впеременную 
    let arrayData = dataApi.map( element => <th>element.object</th>) */
    render () {
        // Понять как получить прокси и принять его и записать, или доабвлять в масси и отображать 
        console.log(store.result);
        console.log(store.data);
        return (
            <div className="main__table" name="table">
                <table>
                    <colgroup>
    
                    </colgroup>
                    <tr>
                        <th>
                            <img src="https://img.icons8.com/clouds/100/000000/city.png" alt="city"/>
                            <br></br>
                            Название
                        </th>
                        <th>
                            <img src="https://img.icons8.com/clouds/100/000000/temperature-outside.png" alt="temp"/><br></br>
                            Температура
                        </th>
                        {/* Температура в цельсиях, можно добавить по щелчку на температуру чтобы он ее менял в таблице пересчитывал 
                        в фаренгейты */}
                        <th>
                            <img src="https://img.icons8.com/clouds/100/000000/up.png" alt="up"/><br></br>
                            {/* <img src="https://img.icons8.com/nolan/64/up.png" alt="up"/><br></br> */}
                            Вверх
                        </th>
                        <th>
                            <img src="https://img.icons8.com/clouds/100/000000/u-turn.png" alt="down"/><br></br>
                            Вниз
                        </th>
                        {/* удалить/восстановить должна меняться динамично в зависимости от статуса записи */}
                        <th>
                            <img src="https://img.icons8.com/clouds/100/000000/delete-sign.png" alt="del"/><img src="https://img.icons8.com/clouds/100/000000/circular-arrows.png" alt="return"/><br></br>
                            Удалить/Восстановить
                        </th>
                    </tr>
                    {/* Добавляет город и температуру в таблицу */}
                    {store.addDataTable}
                </table>
            </div>
        );
    };
};

export default Table;