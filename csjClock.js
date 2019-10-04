const secondsArrow = document.querySelector('.seconds-arrow');
const minutesArrow = document.querySelector('.minutes-arrow');
const hourArrow = document.querySelector('.hour-arrow');

function setDate() {
 const now = new Date();

 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds / 60 ) * 360) + 90;
 secondsArrow.style.transform = `rotate(${secondsDegrees}deg)`;

 const minutes = now.getMinutes();
 const minutesDegrees = ((minutes / 60) * 360) + 90;
 minutesArrow.style.transform = `rotate(${minutesDegrees}deg)`;
 
const hour = now.getHours();
const hourDegrees = ((hour / 60) * 360) + 90;
hourArrow.style.transform = `rotate(${hourDegrees}deg)`;
 
}
setInterval(setDate,1000);