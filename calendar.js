
var d = new Date();

var currentMonth = d.getMonth() + 1; //The plus one is because js counts from 0 for months, but from 1 for days of the month.
var currentDay = d.getDate(); // Hence, this stays unaltered.
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function getDayOfYear(){
    var dayCount = 0;
    for (i=0; i <= (currentMonth - 2); i++){
        dayCount = dayCount + monthDays[i];
    }
    dayCount = dayCount + currentDay;
    return dayCount;
}

function getDayofOctober() {
    var day = getDayOfYear();

    // 274 is the day of the year value for October 1st.
    if (day >= 274){
        return day - 274;
    }
    else if (day < 274){
        day = 365 + day;
        return day - 273;
    }
}

var octDay = String(getDayofOctober());
var lastChar = octDay.split('').pop();
var teenTest = octDay.charAt(0);
var supVal = '';

if (teenTest == '1' && (octDay.length > 1 && octDay <= 99)) {
    supVal = 'th';
} else if (lastChar == '3'){
    supVal = 'rd';
} else if (lastChar == '1'){
    supVal = 'st';
} else if (lastChar == '2'){
    supVal = 'nd';
} else {
    supVal = 'th';
}

document.getElementById('spookDate').innerHTML = 'October ' + String(octDay) + '<sup>' + String(supVal) + '</sup>';


// Here is the script that controls the animation, delaying the main date loading in.

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve(), milliseconds))
}

document.getElementById('spook-text').className = "text-shadow-pop-tl-2";

sleep(800).then(() => {
    document.getElementById('spookDate').style.visibility = 'visible';
    document.getElementById('spookDate').className = "text-shadow-pop-tl";
})