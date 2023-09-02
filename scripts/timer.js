let startBtn = document.querySelector('#start-btn');
let stopBtn = document.querySelector('#stop-btn');
let intervalFunc;

function startTimer() {
    let interval = document.querySelector('#time').value;
    if (!interval) {
        alert('Error no value');
        return;
    }
    startBtn.disabled = true;
    intervalFunc = setInterval(() => alert('Timer completed.') , interval * 1000);
}

function stopTimer() {
    clearInterval(intervalFunc)
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', e => {
    startTimer();
});

stopBtn.addEventListener('click', e => {
    stopTimer();
})