import { decorate, observable, action } from "mobx";


class inputStore {
    input = null;

}



inputStore = decorate(inputStore, {
    input: observable,
    handleDataInput: action,

})

export default new inputStore();