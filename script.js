var buttonStart = document.querySelector('#start');
var buttonPause = document.querySelector('#pause');
var buttonReset = document.querySelector('#reset');
var hh = 0;
var mm = 0;
var ss = 0;
var time = 1000; // qunatos milésimos valem 1 segundo?
var cron;

buttonStart.addEventListener('click', (e) => {
   
    cron = setInterval(() => { timer(); }, time);
    buttonStart.classList.add('disabled')
    
})

document.querySelector('#pause').addEventListener('click', () => {
    clearInterval(cron);
    buttonStart.classList.remove('disabled')

})

document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.querySelector('#counter').innerText = '00:00:00';
    buttonStart.classList.remove('disabled')

})

function timer() {
    ss++

    if (ss === 60) {
        ss = 0;
        mm++

        if (mm === 60) {
            mm = 0;
            hh++
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.querySelector('#counter').innerText = format;

}


