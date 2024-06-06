let timeboxContainer = document.querySelector('.time-container');
let secondBox = document.querySelector('.secondBox');
let minuteBox = document.querySelector('.minuteBox');
let hourBox = document.querySelector('.hourBox');
let dayBox = document.querySelector('.dayBox');
let days = 30;
let hours = 4;
let minutes = 49;
let seconds = 15;


let dealTimer = () =>{
    seconds--;

    if(seconds < 0){
        seconds = 59;
        minutes--;
    }
    if(minutes < 0){
        hours--;
        minutes = 59;
    }
    if(hours < 0){
        hours = 23;
        days--;
    }

    secondBox.innerText = seconds;
    minuteBox.innerText = minutes;
    hourBox.innerText = hours;
    dayBox.innerText = days;
}
let intervalID = setInterval(dealTimer,1000);


if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(intervalID);
}
