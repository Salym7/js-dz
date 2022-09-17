'use strict';

(() => {
    document
        .querySelector('#form')
        .addEventListener(
            'submit',
            (evt) => {
                evt.preventDefault()
                const {target: form} = evt

                const inputs = form.querySelectorAll('input, select, textarea')

                const formData = {}
                for (const input of inputs) {
                    const {name, value} = input
                    formData[name] = value
                }
                localStorage.setItem('formData', JSON.stringify(formData) )
                setTimeout(() => {
                    window.location.href = 'solutions.html'
                }, 2000);
            })

})();

