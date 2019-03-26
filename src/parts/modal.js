function modal() {
     // Модальное окно
    let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    // more.addEventListener('click', function(){
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     console.log(more);
    //     document.body.style.overflow = 'hidden';
    // });

    function modalWindow(button) {
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
            button.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            button.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    }

    more.forEach(item => {
        item.addEventListener('click', function (event) {
            modalWindow(this);
        });
    });
    close.addEventListener('click', function() {
        modalWindow(this);
    });

}

module.exports = modal;