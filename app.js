function updateClock(){
    var now = new Date();
    var dName = now.getDay(),
    mo = now.getMonth(),
    dayNum = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";


    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        pe = "PM";
    }


    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }


    var months = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October", "November", "Dicember"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayName", "month", "dateNumber", "year", "hour", "minutes", "seconds", "period"];

    var values = [week[dName], months[mo], dayNum.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), pe];

    for(let i = 0; i < ids.length; i++)

    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}





function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}
