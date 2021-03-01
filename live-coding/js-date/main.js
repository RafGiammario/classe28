var date = new Date();

var minutes = date.getMinutes();

var minutesRem = 60 - minutes;

var nextHour = date.getHours() + 1;

console.log("Mancano " + minutesRem + " alle " + nextHour);
