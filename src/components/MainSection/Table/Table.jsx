import React from 'react';
import './style-table.css';

const Table = (props) => {
    return (
        <div className="main__table">
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
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                </tr>
            </table>
        </div>
    );
};

export default Table;