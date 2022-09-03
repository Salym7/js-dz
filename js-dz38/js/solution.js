'use strict';

(() => {
    const generateList = (array) => {
        const ul = document.createElement('ul');

        array.forEach((el) => {
            const li = document.createElement('li');
            let childElement
            if (Array.isArray(el)) {
                childElement = generateList(el);
            } else {
                childElement = document.createTextNode(el)
                childElement.innerHTML = el
            }
            li.appendChild(childElement);
            ul.appendChild(li);
        })

        return document.body.appendChild(ul)

    }

    generateList([1, 2, 3])
    generateList([1, 2, [1.1, 1.2, 1.3], 3])
    generateList([1, 2, [1, 2, [1, 2], 1.3], 3])
})();
