// Основное хранилище для управления потоками данных

import { observable, decorate, computed } from "mobx";

class mainStore {

}

mainStore = decorate(mainStore, {
    id: observable,
    title: computed,
});

export default new mainStore();