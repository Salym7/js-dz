'use strict';

(() => {
    const createTable = () => {

        const table = document.createElement('table');
        let count = 0
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                let td = document.createElement('td');
                count +=1
                td.setAttribute('style', 'padding:10px')
                td.innerHTML = `${count}`
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.prepend(table)
        table.setAttribute('border', ':2px;');
    }
    createTable()

})();
