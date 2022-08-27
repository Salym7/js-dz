'use strict';

(() => {
    const arrayLi = []
    const showList = document.querySelectorAll('li')
    for (let li of showList) {
        arrayLi.push(li.firstChild.data);
    }
    console.log(showList.length);
    console.log(arrayLi);
})();







