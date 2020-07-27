// Основное хранилище для управления потоками данных
// import optionStore from './optionalStore';
// import ButtonStore from './buttonStore';
// import InputStore from './inputStore';
// import TableStore from './tableStore';
// import TabsStore from './tabsStore';
import React from 'react';
import { decorate, observable, computed } from "mobx";
// import { element } from 'prop-types';

class store {
    tableData = [
        {id: 1, title: 'Hey'},
        {id: 2, title: 'Hey is'},
        {id: 3, title: 'Hey we'},
        {id: 4, title: 'Hey 12'},
        // {id: 5, title: 'Hey tyh'},
        // {id: 6, title: 'Hey cvc'},
        // {id: 7, title: 'Hey cbnrn'},
        // {id: 8, title: 'Hey qweq'},
        // {id: 9, title: 'Hey vbvfne'},
    ];  

    get activeColumn() {
    let arr = this.tableData.map( (elemArray) => <th>{elemArray.id} = {elemArray.title}</th>);
        return arr
    }

}

store = decorate(store, {
    tableData: observable,
    activeColumn: computed,
});
export default new store ();