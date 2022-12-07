'use strict';
(function () {

    const album = document.querySelector('#album');
    const photo = document.querySelector('#photo');

    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(resolve => resolve.json())
        .then(data => {
            console.log(data)
            data.forEach(item => {
                renderAlbum(item)
            })
        })
        .then((data) => {
            album.addEventListener('click', e => {
                e.stopPropagation();
                // photo.replaceChildren()
                console.log(e.target.closest('[data-id]'));
                //
                const currentItem = e.target.closest('[data-id]')

                const currentItemId = currentItem.getAttribute('data-id')
                localStorage.clear()
                localStorage.setItem('id', currentItemId)

                // window.open('./photo.html')

                return currentItemId
            })
        })


    const renderAlbum = (data) => {
        const userId = data.userId
        const id = data.id;
        const title = data.title;

        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-id', id);
        wrapper.classList.add('box', 'box-album');
        wrapper.innerHTML = `<a class="taskWrapper" href="./photo.html">
                            <div class="taskHeading">User ${userId}</div>
                            <div class="taskDescription">${title}</div>
                         </a>`;
        album.appendChild(wrapper);
    }


}())


