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
                photo.replaceChildren()
                console.log(e.target.closest('[data-id]'));

                const currentItem = e.target.closest('[data-id]')

                const currentItemId = currentItem.getAttribute('data-id')
                const url = `https://jsonplaceholder.typicode.com/photos?albumId=${currentItemId}`
                getAlbum(url)
                return currentItemId
            })
        })

    const getAlbum = (url) => {
        fetch(url)
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data)
                data.forEach(item => {
                    renderPhoto(item)
                })
            })
    }

    const renderAlbum = (data) => {
        const userId = data.userId
        const id = data.id;
        const title = data.title;

        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-id', id);
        wrapper.classList.add('box');
        wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">User ${userId}</div>
                            <div class="taskDescription">${title}</div>
                         </div>`;
        album.appendChild(wrapper);
    }

    const renderPhoto = data => {
        const albumId = data.userId
        const id = data.id;
        const title = data.title;
        const url = data.url;
        const thumbnailUrl = data.thumbnailUrl

        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-id', id);
        wrapper.classList.add('box');
        wrapper.innerHTML = `<div class="taskWrapper">
                                <p class="albumId">User ${albumId}</p>
                                <p class="id">User ${id}</p>
                                <p class="title">User ${title}</p>
                                <img src="${url}" alt="img ${id}">
                                <img src="${thumbnailUrl}" alt="img ${id}">
                         </div>`;

        photo.appendChild(wrapper);

    }

}())


