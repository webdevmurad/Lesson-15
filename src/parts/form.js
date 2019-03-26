function form() {
    // Форма

    // let message = {
    //     loading: 'Загрузка...',
    //     success: 'Спасибо! Скоро мы с вами свяжемся!',
    //     failure: 'Что-то пошло не так...'
    // };

    // let form = document.querySelector('form.main-form'),
    //     tel = document.querySelectorAll('[type=tel]'),
    //     formContact = document.querySelector('form#form'),
    //     statusMessage = document.createElement('div');

    //     statusMessage.classList.add('status');
    
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault();
    //         formSubmis(event);
    //     });

    //     formContact.addEventListener('submit', (event) => {
    //         event.preventDefault();
    //         formSubmis(event);
    //     });

    //     // В инпут нельзя ввести буквы, только цифры и знак +
    //     tel.forEach((item) => {
    //         item.addEventListener('input', (event) => {
    //             if (!event.target.value.match("^[ 0-9\+]+$")) {
    //                 event.target.value = event.target.value.slice(0, -1);
    //             }
    //         });
    //     });

    // function formSubmis(event) {
    //     let form = event.target,
    //         input = form.getElementsByTagName('input');

    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');


    //     let formData = new FormData(form);

    //     for (let i = 0; i < input.length; i++) {
    //         formData.delete(input[i].name);
    //         formData.append(input[i].type, input[i].value);
    //         input[i].value = '';
    //     }

    //     let obj = {};
    //     formData.forEach(function (value, key) {
    //         obj[key] = value;
    //     });

    //     let json = JSON.stringify(obj);

    //     request.send(json);

    //     request.addEventListener('readystatechange', function () {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    // } 


        // Форма с промисами

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };


    let form = document.querySelector('form.main-form'),
        tel = document.querySelectorAll('[type=tel]'),
        input = form.getElementsByTagName('input'),
        formContact = document.querySelector('form#form'),
        statusMessage = document.createElement('div');

    function sendForm(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.onreadystatechange = function () {
                        if (request < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    };

                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

    tel.forEach((item) => {
        item.addEventListener('input', (event) => {
            if (!event.target.value.match("^[ 0-9\+]+$")) {
                event.target.value = event.target.value.slice(0, -1);
            }
        });
    });
    sendForm(form);
    sendForm(formContact);
}

module.exports = form;