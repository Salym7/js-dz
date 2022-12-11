'use strict';


(function () {
    class GalleryPhoto {

        photo = null;

        constructor(photo, url) {
            if (typeof photo === 'string' || photo.trim() !== '') this.photo = document.querySelector(photo);
            this.getUrl(url)
        }

        getUrl() {
            document.addEventListener('DOMContentLoaded',  (event) => {
                event.preventDefault();
                event.stopPropagation();
                const id = JSON.parse(localStorage.getItem('id'));
                const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
                this.getAlbum(url)
            })
        }

        getAlbum(url) {
            fetch(url)
                .then(resolve => resolve.json())
                .then(data => {
                    console.log(data);
                    data.forEach(item => {
                        this.renderPhoto(item);
                    })
                })
        }

        renderPhoto(data) {
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

            this.photo.appendChild(wrapper);

        }

    }

    new GalleryPhoto('#photo', 'https://jsonplaceholder.typicode.com/photos?albumId=')
}())
