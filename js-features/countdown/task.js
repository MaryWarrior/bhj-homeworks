'use strict'

const winWind = function () {
    const time = document.getElementById("timer");
    time.textContent -= 1;
    if (time.textContent <= 0) {
        alert('Вы победили в конкурсе');
        clearInterval(inervalID);
    }
}
const inervalID = setInterval(winWind, 300);