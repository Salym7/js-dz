'use strict';

(function () {

    const dataKey = 'formData';
    let id = 0;
    const form = document.querySelector('#todoForm');
    const todoItems = document.querySelector('#todoItems');

    if (localStorage.getItem(dataKey) && JSON.parse(localStorage.getItem(dataKey)).length){
        const data = JSON.parse(localStorage.getItem(dataKey));
        id = data[data.length - 1].id;
    }

    const renderItem = (todoItem) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');
        wrapper.setAttribute('data-id', todoItem.title);

        wrapper.innerHTML = `
               <div class="taskWrapper" >
                   <div class="taskHeading">${todoItem.title}</div>
                   <div class="taskDescription">${todoItem.description}</div>
               </div>`;

        todoItems.prepend(wrapper);
    };


    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        const {target} = event;

        let data = target.querySelectorAll('input,textarea');

        data = Array.from(data)
            .reduce((acc, item) => {
                acc[item.name] = item.value;
                return acc;
            }, {})

        data.id = id += 1;

        const dataToSave =
            localStorage.getItem(dataKey) ?
                JSON.parse(localStorage.getItem(dataKey)) :
                [];
        dataToSave.push(data);

        localStorage.setItem(dataKey, JSON.stringify(dataToSave));

        renderItem(data);

    })

    document.addEventListener('DOMContentLoaded', () => {
        if (!localStorage.getItem(dataKey)) return;

        const data = JSON.parse(localStorage.getItem(dataKey))
        data.forEach(item => renderItem(item))
    })

    todoItems.addEventListener('click', e=>{
        e.stopPropagation()

        const currentItem = e.target.closest('[data-id]')
        const currentItemId = Number(currentItem.getAttribute('data-id'));

        const filteredData = JSON
            .parse(localStorage.getItem(dataKey))
            .filter(item=> item.id !== currentItemId)

        localStorage.setItem(dataKey, JSON.stringify(filteredData));
        currentItem.remove();
    })

}())