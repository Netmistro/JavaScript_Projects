// Main Function
function showTime() {
  // New instance of the Date Object
  let date = new Date();

  // Get all the associated parameneters such as minutes, hours and seconds
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //Get the trailing AM and or PM based on the hours
  let formatHours = convertFormat(hours);
  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  // Add to document
  document.getElementById(
    'clock'
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}
// Function to show the trailing AM or PM
// time is used as an arbitrary parameter
function convertFormat(time) {
  let format = 'AM';
  if (time >= 12) {
    format = 'PM';
  }
  return format;
}

// Function to have the time displayed as standard AM and PM and not military time
function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

// Function to add a leading zero
function addZero(time) {
  if (time < 10) {
    time = '0' + time;
  }
  return time;
}

// Call the function so there is no blank screen
showTime();

// Call the main function
setInterval(showTime, 1000);
