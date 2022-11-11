class Model {
    #key = null;

    constructor({key}) {
        this.#key = key
    }

    saveData(data) {
        const dbData = JSON.parse(localStorage.getItem(this.#key));

        if(!dbData || !dbData.length) {
            localStorage.setItem(this.#key, JSON.stringify([data]))
            return data;
        }

        dbData.push({...data});
        localStorage.setItem(this.#key, JSON.stringify(dbData))
        return data;
    }
    getId() {
        if (localStorage.getItem(this.selector) && JSON.parse(localStorage.getItem(this.selector)).length) {
            const data = JSON.parse(localStorage.getItem(this.selector));
            this.id = data[data.length - 1].id;
        }
    }

}