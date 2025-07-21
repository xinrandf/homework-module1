//Create a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

    // Time zone variables
    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }

    // Time zone calculation
    // Convert GMT hour to standard time
    var stdUTCHour = utchr;
    if (stdUTCHour == 0) stdUTCHour = 12;
    else if (stdUTCHour > 12) stdUTCHour -= 12;

    // Calculate time difference
    timeDiff = hr - stdUTCHour;
    // Adjust to positive if negative
    adjTimeDiff = Math.abs(timeDiff);

    // Determine time zone based on US time zone offsets from GMT
    // Pacific: UTC-7, Mountain: UTC-6, Central: UTC-5, Eastern: UTC-4 (Daylight Saving)
    // We'll use the offset between local and UTC hour
    var offset = d.getTimezoneOffset() / 60;
    // getTimezoneOffset returns difference in minutes from UTC (negative for US)
    // For US, offset is usually 7, 6, 5, or 4 (during DST)
    if (offset === 7) timeZone = "PT";
    else if (offset === 6) timeZone = "MT";
    else if (offset === 5) timeZone = "CT";
    else if (offset === 4) timeZone = "ET";
    else timeZone = "GMT";

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time
}

//Initial run of time data function
currentTime();
//Run time data function every 1 second
setInterval(currentTime, 1000); //setting timer
