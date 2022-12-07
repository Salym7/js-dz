'use strict';


(function () {


    document.addEventListener('DOMContentLoaded', event => {
        event.preventDefault();
        event.stopPropagation();
        const id = JSON.parse(localStorage.getItem('id'));

        const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
        getAlbum(url)
        return id
    })

    const getAlbum = (url) => {
        fetch(url)
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data);
                data.forEach(item => {
                    renderPhoto(item);
                })
            })
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
