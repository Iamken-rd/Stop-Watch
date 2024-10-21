let countdownInterval;
let remainingMinutes = 5;
let remainingSeconds = 0;
let isPaused = false;

function startCountdown(hoursId, minsId) {
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

    }, 1000);
}


function pauseCountdown() {
    isPaused = true;
    clearInterval(countdownInterval); 
}


function resetCountdown(hoursId, minsId) {
    clearInterval(countdownInterval); 
    isPaused = false;
    remainingMinutes = 5;
    remainingSeconds = 0;


    document.getElementById(hoursId).innerText = '5';
    document.getElementById(minsId).innerText = '00';
}

function CoinToss()
{
    setTimeout(function(){
        let result = Math.random() > 0.5 ? 'Tails' : 'Head';
        alert(result);
        document.getElementById("results").innerText = "Result : " + result;
    },3000);

   

}