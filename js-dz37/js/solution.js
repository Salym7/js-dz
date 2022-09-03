'use strict';

(() => {
    const ul = document.querySelector('.ulClass');
    const ulAttributes = ul.attributes

    const arrayAttribute = []
    const arrayAttributeName = []

    for (const attribute of ulAttributes) {
        arrayAttribute.push(attribute.value)
        arrayAttributeName.push(attribute.name)
    }

    console.log(arrayAttribute);
    console.log(arrayAttributeName);

    document.querySelector('ul li:last-child').innerHTML = "Hello my name is Oleksandr"
    document.querySelector('ul li:first-child').setAttribute("data-my-name","Oleksandr")
    document.querySelector('ul').removeAttribute('data-dog-tail')
})();