class Model {
    #key = null;

    constructor({key}) {
        this.#key = key
    }

    saveData(data) {
        const dbData = JSON.parse(localStorage.getItem(this.#key));

        if (!dbData || !dbData.length) {
            localStorage.setItem(this.#key, JSON.stringify([data]))
            return data;
        }

        dbData.push({...data});
        localStorage.setItem(this.#key, JSON.stringify(dbData))
        return data;
    }

    getId(controller) {
        if (localStorage.getItem(this.#key) && JSON.parse(localStorage.getItem(this.#key)).length) {
            const data = JSON.parse(localStorage.getItem(this.#key));
            controller.id = data[data.length - 1].id;
        }
    }

    getHTMLElement(view) {
        document.addEventListener('DOMContentLoaded', event => {
            event.preventDefault();
            event.stopPropagation();
            const toDo = JSON.parse(localStorage.getItem(this.#key));
            if (!toDo) return 'localStorage is empty';
            toDo.map(todoItem => {
                view.renderItem(todoItem);
            })
        })
    }

    filteredData(currentItemId) {
        const filtered = JSON.parse(localStorage.getItem(this.#key))
            .filter(item => item.id !== currentItemId);
        localStorage.setItem(this.#key, JSON.stringify(filtered))
    }


}