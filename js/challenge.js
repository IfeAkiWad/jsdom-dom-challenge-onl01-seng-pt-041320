// A Counter that increases by 1 each second
// Plus and Minus buttons that increment or decrement the counter
// A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
// A comment box that adds comments when submitted

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const comment = document.getElementById('comment')
    const pause = document.getElementById('pause')

    let timer = setInterval(setTime, 1000);

});