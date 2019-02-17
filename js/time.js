function showTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    //  var ms = date.getMilliseconds(); // 0 -999
    var midnight = date.setHours(24, 0, 0, 0);
    var now = Date.now(); //trenutno vreme
    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    var dan = weekday[date.getDay()]; //dan u nedelji
    var diff = (midnight - now) / 1000; // vreme do ponoci u sekundama

    var valDiff = 86400 - diff; // razlika (preostalo vreme)
    var cssValue = 100 - (valDiff / 864); // preostalo vreme u procentima
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // ms = (ms < 100) ? "00" + ms : ms;




    var datum = day + "/" + month + "/" + year + " " + dan;
    document.getElementById("date").innerText = datum;
    document.getElementById("hours").innerText = h + ":";
    document.getElementById("minutes").textContent = m + ":";
    document.getElementById("seconds").textContent = s;
    //  document.getElementById("miliseconds").textContent = ms - 1;
    document.getElementById("indicator").style.width = cssValue + "%";
    // document.getElementById("in-value").textContent = cssValue + "%";
    // console.log(cssValue);
    setTimeout(showTime, 1000);

}

showTime();