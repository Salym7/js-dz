class View {
    #todoContainer = null;
    #form = null

    renderItem({title, description, id}) {
        const wrapper = document.createElement('div')
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-id', id);
        wrapper.innerHTML = `
                <div class="taskWrapper">
                    <div class="taskHeading">${title}</div>
                    <div class="taskDescription">${description}</div>
                </div>`;

        this.#todoContainer.prepend(wrapper);
    }


    setTodosContainer(htmlElement) {
        if (this.#todoContainer) throw new Error('You cannot redeclare todo container');
        this.#todoContainer = htmlElement;
    }

    setForm(htmlElement) {
        if (this.#todoContainer) throw new Error('You cannot redeclare form');
        this.#form = htmlElement;
    }

    removeItems(model) {
        this.#todoContainer.addEventListener('click', e => {
            e.stopPropagation();

            const currentItem = e.target.closest('[data-id]');

            const currentItemId = Number(currentItem.getAttribute('data-id'));

            model.filteredData(currentItemId)

            currentItem.remove();
        })
    }

}