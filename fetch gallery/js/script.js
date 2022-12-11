'use strict';
(function () {

    class Gallery {
        album = null;
        // photo = null;
        url = null;

        constructor(album,url) {
            if (typeof album === "string" || album.trim() !== '') this.album = document.querySelector(album);
            // if (typeof photo === 'string' || photo.trim() !== '') this.photo = document.querySelector(photo);
            if (typeof url === 'string' || url.trim() !== '') this.url = url;
            this.getData(this.url)
            console.log(this.album);
        }

        getData(url) {
            fetch(url)
                .then(resolve => resolve.json())
                .then(data => {
                    this.data = data
                    console.log(data)
                    data.forEach(item => {
                        this.renderAlbum(item)
                    })
                })
                .then((data) => {
                    this.album.addEventListener('click', e => {
                        e.stopPropagation();
                        // photo.replaceChildren()
                        console.log(e.target.closest('[data-id]'));

                        const currentItem = e.target.closest('[data-id]')

                        const currentItemId = currentItem.getAttribute('data-id')
                        localStorage.clear()
                        localStorage.setItem('id', currentItemId)
                        return currentItemId
                    })
                })
        }


        renderAlbum(data){
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
            this.album.appendChild(wrapper);
        }


    }

    new Gallery('#album','https://jsonplaceholder.typicode.com/albums');

    // const album = document.querySelector('#album');
    // const photo = document.querySelector('#photo');
    //
    // fetch('https://jsonplaceholder.typicode.com/albums')
    //     .then(resolve => resolve.json())
    //     .then(data => {
    //         console.log(data)
    //         data.forEach(item => {
    //             renderAlbum(item)
    //         })
    //     })
    //     .then((data) => {
    //         album.addEventListener('click', e => {
    //             e.stopPropagation();
    //             // photo.replaceChildren()
    //             console.log(e.target.closest('[data-id]'));
    //             //
    //             const currentItem = e.target.closest('[data-id]')
    //
    //             const currentItemId = currentItem.getAttribute('data-id')
    //             localStorage.clear()
    //             localStorage.setItem('id', currentItemId)
    //
    //             return currentItemId
    //         })
    //     })
    //
    //
    // const renderAlbum = (data) => {
    //     const userId = data.userId
    //     const id = data.id;
    //     const title = data.title;
    //
    //     const wrapper = document.createElement('div');
    //     wrapper.setAttribute('data-id', id);
    //     wrapper.classList.add('box', 'box-album');
    //     wrapper.innerHTML = `<a class="taskWrapper" href="./photo.html">
    //                         <div class="taskHeading">User ${userId}</div>
    //                         <div class="taskDescription">${title}</div>
    //                      </a>`;
    //     album.appendChild(wrapper);
    // }


}())


