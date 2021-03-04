
function showTime() {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  time_Covert = "AM";

  if (hr > 12) {
    hr = hr - 12;
    timeCovert = "PM";
  }
  else if (hr == 0) {
    hr = 12;
    timeCovert = "AM"
  }

  if (hr < 10)
    hr = "0" + hr;
  else
    hr = hr;
  
  if (min < 10)
    min = "0" + min;
  else
    min = min;
  
  if (sec < 10)
    sec = "0" + sec;
  else
    sec = sec;

  // Shorthand Method for (if statements) above
      // hr = hr < 10 ? "0" + hr : hr; 
    // min = min < 10 ? "0" + min : min;
    // sec = sec < 10 ? "0" + sec : sec;
  
  
  let currentTime = hr + ":" + min + ":" + sec + timeCovert;
  document.getElementById("clock").innerHTML = currentTime;
  setTimeout(showTime, 1000);
}

showTime();

