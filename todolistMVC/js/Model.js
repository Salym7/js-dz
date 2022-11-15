class Model {
    #key = null;

    constructor({key}) {
        this.#key = key
    }

    saveData(data) {
        const dbData = this.#getItem();

        if (!dbData || !dbData.length) {
            this.#setItem([data])
            return data;
        }

        dbData.push({...data});
        this.#setItem(dbData)
        return data;
    }

    getId(controller) {
        if (this.#getItem() && this.#getItem().length) {
            const data = this.#getItem();
            controller.id = data[data.length - 1].id;
        }
    }

    getHTMLElement(view) {
        document.addEventListener('DOMContentLoaded', event => {
            event.preventDefault();
            event.stopPropagation();
            const toDo = this.#getItem();
            if (!toDo) return 'localStorage is empty';
            toDo.map(todoItem => {
                view.renderItem(todoItem);
            })
        })
    }

    filteredData(currentItemId) {
        const filtered = this.#getItem()
            .filter(item => item.id !== currentItemId);
        this.#setItem(filtered)
    }

    #setItem(date) {
        localStorage.setItem(this.#key, JSON.stringify(date))
    }

    #getItem() {
        return JSON.parse(localStorage.getItem(this.#key))
    }

}