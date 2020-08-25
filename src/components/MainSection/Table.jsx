import React, { Component } from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react';


@observer
class Table extends Component {
    render () {
        // Понять как получить прокси и принять его и записать, или доабвлять в масси и отображать 
        console.log(store.result);
        console.log(store.data);
        return (
            <table>
                <thead>
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
                </thead>
                <tbody>
                    {/* Добавляет город и температуру в таблицу */}
                    {store.addDataTable}
                </tbody>
            </table>
        );
    };
};

export default Table;