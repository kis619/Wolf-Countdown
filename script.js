const TARGET_DATE = new Date("Jan 8, 2024 18:00:00").getTime();
const countdownImage = document.getElementById("wolf-bike");

function getTimeLeft(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
}

function setTimerToExpired() {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "EXPIRED";
    countdownImage.style.filter = "grayscale(100%)";
}

function countdown(remainingTime) {
    returnTimer(remainingTime)
    decreaseColour(remainingTime)
}

function returnTimer(remainingTime) {
    const { days, hours, minutes, seconds } = getTimeLeft(remainingTime);
    const timer = document.getElementById("timer") 
    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

function decreaseColour(remainingTime) {
    const totalDuration = TARGET_DATE - new Date("Dec 30, 2023 00:00:00").getTime();
    const saturation = (remainingTime / totalDuration) * 100;
    countdownImage.style.filter = `grayscale(${100 - saturation}%)`;
}
const updateCountdown = () => {
    const remainingTime = TARGET_DATE - new Date().getTime();
    remainingTime > 0 ? countdown(remainingTime) : setTimerToExpired()
};
const interval = setInterval(updateCountdown, 1000);
  


