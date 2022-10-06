'use strict';

const toDoList = {
    selector: null,
    form: null,
    containerSelector: null,
    container: null,
    id: 0,

    init(selector, container) {
        if (typeof selector === "string" || selector.trim() !== '') this.selector = selector;
        if (typeof container === 'string' || container.trim() !== '') this.containerSelector = container;

        this.getId()
        this.getForm();
        this.getHTMLElement()
    },
    getId() {
        if (localStorage.getItem(this.selector) && JSON.parse(localStorage.getItem(this.selector)).length) {
            const data = JSON.parse(localStorage.getItem(this.selector));
            this.id = data[data.length - 1].id;
        }
    },
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
            const savedData = this.saveData(data);
            this.renderItem(savedData);
        })
    },

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
    },

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
    },

    renderItem(data) {
        this.id += 1
        const title = data.title;
        const description = data.description;
        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-id', this.id);
        wrapper.classList.add('col-4');
        wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">${title}</div>
                            <div class="taskDescription">${description}</div>
                         </div>`;
        this.container.appendChild(wrapper);
    }

}
toDoList.init('#todoForm', '#todoItems');

// (function () {
//
//     const dataKey = 'formData';
//     let id = 0;
//     const form = document.querySelector('#todoForm');
//     const todoItems = document.querySelector('#todoItems');
//
//     if (localStorage.getItem(dataKey) && JSON.parse(localStorage.getItem(dataKey)).length) {
//         const data = JSON.parse(localStorage.getItem(dataKey));
//         id = data[data.length - 1].id;
//     }
//
//     const renderItem = (todoItem) => {
//         const wrapper = document.createElement('div');
//         wrapper.classList.add('col-4');
//         wrapper.setAttribute('data-id', todoItem.id);
//
//        wrapper.innerHTML = `
//                <div class="taskWrapper" >
//                    <div class="taskHeading">${todoItem.title}</div>
//                    <div class="taskDescription">${todoItem.description}</div>
//                </div>`
//
//         todoItems.prepend(wrapper);
//     };
//
//
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         event.stopPropagation();
//
//         const {target} = event;
//
//         let data = target.querySelectorAll('input,textarea');
//
//         data = Array.from(data)
//             .reduce((acc, item) => {
//                 acc[item.name] = item.value;
//                 return acc;
//             }, {})
//
//         data.id = id += 1;
//
//         const dataToSave =
//             localStorage.getItem(dataKey) ?
//                 JSON.parse(localStorage.getItem(dataKey)) :
//                 [];
//         dataToSave.push(data);
//
//         localStorage.setItem(dataKey, JSON.stringify(dataToSave));
//
//         renderItem(data);
//
//     })
//
//     document.addEventListener('DOMContentLoaded', () => {
//         if (!localStorage.getItem(dataKey)) return;
//
//         const data = JSON.parse(localStorage.getItem(dataKey))
//         data.forEach(item => renderItem(item))
//     })
//
//     todoItems.addEventListener('click', e => {
//         e.stopPropagation()
//
//         const currentItem = e.target.closest('[data-id]');
//         const currentItemId = Number(currentItem.getAttribute('data-id'));
//         console.log(currentItem);
//
//         const filteredData = JSON
//             .parse(localStorage.getItem(dataKey))
//             .filter(item => item.id !== currentItemId);
//
//         console.log(filteredData);
//         localStorage.setItem(dataKey, JSON.stringify(filteredData));
//         currentItem.remove();
//     })
//
// }())

