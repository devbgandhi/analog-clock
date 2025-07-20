const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".minute-hand");
const secondsHand = document.querySelector(".second-hand");
const getDate = document.querySelector(".date");

function setDate() {
    let today = new Date();
    let todayDate = today.toLocaleTimeString();
    getDate.innerHTML = `<p>${todayDate}</p>`;
}


function getTime () {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    secondsHand.style.transform = "rotate(" + (seconds*6) + "deg";
    minutesHand.style.transform = "rotate(" + (minutes*6 + seconds/10) + "deg";
    hoursHand.style.transform = "rotate(" + (hours*30 + minutes/2) + "deg";
}



getTime();
setDate();
setInterval(setDate, 100);
setInterval(getTime, 100);

