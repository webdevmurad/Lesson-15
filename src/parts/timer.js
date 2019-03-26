function timer() {
        // Тут таймер
    let deadline = '2019-03-16';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
            hours.textContent = Clock(t.hours);
            minutes.textContent = Clock(t.minutes);
            seconds.textContent = Clock(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                // Когда закончится таймер он не пойдет в минус
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    
    // Добавляю ноль
    function Clock(n) {
        if (n < 10) {
            return `${0}` + n;
        } else {
            return n;
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;
