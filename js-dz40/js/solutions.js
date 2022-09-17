'use strict';

(() => {
    const formData = localStorage.getItem('formData')
    const obj = JSON.parse(formData);
    const ul = document.createElement('ul');

    for (const key in obj) {
        const value = obj[key]
        const li = document.createElement('li')
        if (value) {
            li.innerHTML = key + ': ' + value
        } else {
            li.innerHTML = key + ': no data entered '
        }
        ul.appendChild(li)
    }

    return document.body.appendChild(ul);

})();
