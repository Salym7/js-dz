class Controller {
    #model = null;
    #view = null;

    form = null;
    formSelector = null;
    todoContainerSelector = null;
    todoContainer = null;
    id = 0


    constructor(model, view, {formSelector, todoContainerSelector}) {
        this.#setModel(model);
        this.#setView(view);

        this.formSelector = formSelector
        this.todoContainerSelector = todoContainerSelector
        this.#model.getId(this)
        this.getForm();
        this.getTodoContainer();

        this.#model.getHTMLElement(this.#view)
        this.form.addEventListener('submit', this.#handleForm);
        this.#view.removeItems(this.#model)
    }


    #handleForm = e => {
        e.preventDefault();
        e.stopPropagation();
        if(!this.validationForm()) return 'input too short'
        const data = {};

        this.form.querySelectorAll('input, textarea')
            .forEach(item => {
                data[item.name] = item.value
            })
        data.id = this.id += 1;
        this.#model.saveData(data);
        this.#view.renderItem(data);
        this.#view.resetForm()

    }

    validationForm() {
        const inputs = this.form.querySelectorAll('input, textarea')
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim().length < 5) {
                this.#view.addClass( inputs[i])
                return false;
            }
            this.#view.removeClass( inputs[i])
        }
        return true
    }




    getTodoContainer() {
        this.todoContainer = document.querySelector(this.todoContainerSelector);
        this.#view.setTodosContainer(this.todoContainer);
    }

    getForm() {
        const form = document.querySelector(this.formSelector);
        if (!(form instanceof HTMLFormElement)) throw new Error('Form should be an HTML form element');
        this.form = form;
        this.#view.setForm(form);
    }


    #setModel(modelInstance) {
        if (!modelInstance) throw new Error('Model is required')
        this.#model = modelInstance;
    }

    #setView(viewInstance) {
        if (!viewInstance) throw new Error('View is required')
        this.#view = viewInstance;
    }
}