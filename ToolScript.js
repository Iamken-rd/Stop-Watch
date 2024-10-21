let countdownInterval1, countdownInterval2;
let remainingMinutes1 = 5, remainingSeconds1 = 0, isPaused1 = false;
let remainingMinutes2 = 5, remainingSeconds2 = 0, isPaused2 = false;

function startCountdown(hoursId, minsId, counter) {
    let remainingMinutes, remainingSeconds, countdownInterval, isPaused;

    if (counter === 1) {
        remainingMinutes = remainingMinutes1;
        remainingSeconds = remainingSeconds1;
        countdownInterval = countdownInterval1;
        isPaused = isPaused1;
    } else {
        remainingMinutes = remainingMinutes2;
        remainingSeconds = remainingSeconds2;
        countdownInterval = countdownInterval2;
        isPaused = isPaused2;
    }

    if (!isPaused) {
        remainingMinutes = parseInt(document.getElementById(hoursId).innerText);
        remainingSeconds = parseInt(document.getElementById(minsId).innerText);
    }

    isPaused = false;

    countdownInterval = setInterval(function() {
        if (remainingSeconds === 0) {
            if (remainingMinutes === 0) {
                clearInterval(countdownInterval); 
                alert('Time is up!');
                return;
            } else {
                remainingMinutes--;
                remainingSeconds = 59;
            }
        } else {
            remainingSeconds--;
        }

        document.getElementById(hoursId).innerText = remainingMinutes;
        document.getElementById(minsId).innerText = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        // Update the state variables after each decrement
        if (counter === 1) {
            remainingMinutes1 = remainingMinutes;
            remainingSeconds1 = remainingSeconds;
            countdownInterval1 = countdownInterval;
            isPaused1 = isPaused;
        } else {
            remainingMinutes2 = remainingMinutes;
            remainingSeconds2 = remainingSeconds;
            countdownInterval2 = countdownInterval;
            isPaused2 = isPaused;
        }

    }, 1000);
}

function pauseCountdown(counter) {
    if (counter === 1) {
        clearInterval(countdownInterval1); 
        isPaused1 = true;
    } else {
        clearInterval(countdownInterval2); 
        isPaused2 = true;
    }
}

function resetCountdown(hoursId, minsId, counter) {
    if (counter === 1) {
        clearInterval(countdownInterval1);
        isPaused1 = false;
        remainingMinutes1 = 5;
        remainingSeconds1 = 0;

        document.getElementById(hoursId).innerText = '5';
        document.getElementById(minsId).innerText = '00';
    } else {
        clearInterval(countdownInterval2);
        isPaused2 = false;
        remainingMinutes2 = 5;
        remainingSeconds2 = 0;

        document.getElementById(hoursId).innerText = '5';
        document.getElementById(minsId).innerText = '00';
    }
}

function CoinToss() {
    setTimeout(function(){
        let result = Math.random() > 0.5 ? 'Tails' : 'Heads';
        alert(result);
        document.getElementById("results").innerText = "Result : " + result;
    }, 3000);
}
