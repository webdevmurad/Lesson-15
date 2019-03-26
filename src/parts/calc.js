function calc() {
    // Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        // Сбрасывает цифры
        persons.addEventListener('keydown', (event) => {
            numbers(event);
        });

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        // Сбрасывает цифры
        restDays.addEventListener('keydown', (event) => {
            numbers(event);
        });

        restDays.addEventListener('change', function () {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

        // Ввод только числа (взято с гитхаба)
        function numbers (event) {
            let No = event.keyCode;
            
            if (No == 46 || No == 8 || No == 9 || No == 27 ||
                (No == 65 && event.ctrlKey === true) ||
                (No >= 35 && No <= 39)) {
                return;
            } else {
                if ((No < 48 || No > 57) && (No < 96 || No > 105)) {
                    event.preventDefault();
                }
            }
        }
}

module.exports = calc;