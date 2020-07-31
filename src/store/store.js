
import React from 'react';
import { decorate, observable, computed, action, observe } from "mobx";
import { observer } from "mobx-react";
// import { element } from 'prop-types';

class store {
    // тестировочное отображение данных в таблице 
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

    inputValue = null;

    get activeColumn() {
        let arr = this.tableData.map( (elemArray) => <th>{elemArray.id} = {elemArray.title}</th>);
        return arr;
    };
    
    handleDataInput (e) {
        const target = e.target;
        const name = target.name;

        this.inputValue = {[name]: target.value};
        console.log(this.inputValue);
    };

}

store = decorate(store, {
    tableData: observable,
    activeColumn: computed,
    inputValue: observable,
    handleDataInput: action,
    

});
export default new store ();