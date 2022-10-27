'use strict';


(() => {
    class ToDoList {
        selector = null;
        form = null;
        containerSelector = null;
        container = null;
        id = 0

        constructor(selector,container) {
            if (typeof selector === "string" || selector.trim() !== '') this.selector = selector;
            if (typeof container === 'string' || container.trim() !== '') this.containerSelector = container;

            this.getId();
            this.getForm();
            this.getHTMLElement();
            this.removeItems();
        }

        getId() {
            if (localStorage.getItem(this.selector) && JSON.parse(localStorage.getItem(this.selector)).length) {
                const data = JSON.parse(localStorage.getItem(this.selector));
                this.id = data[data.length - 1].id;
            }
        }
        getForm() {
            const formElement = document.querySelector(this.selector);
            this.form = formElement;
            formElement.addEventListener('submit', event => {
                event.preventDefault();
                event.stopPropagation();
                const data = {};
                formElement
                    .querySelectorAll('input, textarea')
                    .forEach((item) => {
                        data[item.name] = item.value;
                    })
                data.id = this.id += 1;
                const savedData = this.saveData(data);
                this.renderItem(savedData);
            })
        }

        getHTMLElement() {
            this.container = document.querySelector(this.containerSelector);
            document.addEventListener('DOMContentLoaded', event => {
                event.preventDefault();
                event.stopPropagation();
                const toDo = JSON.parse(localStorage.getItem(this.selector));
                if (!toDo) return 'localStorage is empty';
                toDo.map(todoItem => {
                    this.renderItem(todoItem);
                })
            })
        }

        saveData(data) {
            let dataFromStore = localStorage.getItem(this.selector);
            if (!dataFromStore) {
                const array = [];
                array.push(data);
                localStorage.setItem(this.selector, JSON.stringify(array));
            }
            if (dataFromStore) {
                dataFromStore = JSON.parse(dataFromStore);
                dataFromStore.push(data);
                localStorage.setItem(this.selector, JSON.stringify(dataFromStore));
            }
            return data;
        }

        renderItem(data) {
            const id = data.id
            const title = data.title;
            const description = data.description;
            const wrapper = document.createElement('div');
            wrapper.setAttribute('data-id', id);
            wrapper.classList.add('col-4');
            wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${title}</div>
                            <div class="taskDescription">${description}</div>
                         </div>`;
            this.container.appendChild(wrapper);
        }

        removeItems() {
            this.container.addEventListener('click', e => {
                e.stopPropagation();

                const currentItem = e.target.closest('[data-id]');
                const currentItemId = Number(currentItem.getAttribute('data-id'));

                const filteredData = JSON
                    .parse(localStorage.getItem(this.selector))
                    .filter(item => item.id !== currentItemId);

                localStorage.setItem(this.selector, JSON.stringify(filteredData));
                currentItem.remove();
            })
        }

    }

 new ToDoList('#todoForm', '#todoItems');

})();

