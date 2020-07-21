import React, { Component } from 'react';
// Библиотека для проверки данных на тип
// import PropTypes from 'prop-types';
import './style-table.css';

class Table extends Component {
    // constructor(props) {
    //     super (props)
    // }
    render () {
        return (
            <div className="main__table" name="table">
                <table>
                    <colgroup>
    
                    </colgroup>
                    <tr>
                        <th>Название</th>
                        <th>Температура</th>
                        <th><button>Вверх</button></th>
                        <th><button>Вниз</button></th>
                        {/* удалить/восстановить должна меняться динамично в зависимости от статуса записи */}
                        <th><button>Удалить/Восстановить</button></th>
                    </tr>
                    <tr>
                        <th>{this.props.textValue}</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </table>
            </div>
        );
    };
};

// // Проерка на тип данных
// Table.PropTypes = {
//     textValue: PropTypes.string
// };


export default Table;