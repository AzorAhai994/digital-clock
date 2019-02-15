function showTime() {
    var date = new Date();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    var dan = weekday[date.getDay()];


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var datum = day + "/" + month + "/" + year + " " + dan;
    document.getElementById("date").innerText = datum;
    document.getElementById("hours").innerText = h + ":";
    document.getElementById("minutes").textContent = m + ":";
    document.getElementById("seconds").textContent = s;

    setTimeout(showTime, 1000);

}

showTime();