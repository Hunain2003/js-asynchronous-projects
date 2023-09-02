let startBtn = document.querySelector('#start-btn');
let stopBtn = document.querySelector('#stop-btn');

function startTimer() {
    let interval = document.querySelector('#time').value;
    if (!interval) {
        alert('Error no value');
        return;
    }
    startBtn.disabled = true;
    setInterval(alert('Timer completed.') , interval);
}

function stopTimer() {
    clearInterval(startTimer)
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', e => {
    startTimer();
});

stopBtn.addEventListener('click', e => {
    stopTimer();
})