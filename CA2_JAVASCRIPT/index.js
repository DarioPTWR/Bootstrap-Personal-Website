// Author : DarioTeh
// Date : 20/7/2022
// JavaScript File : index.js

//Typing Text Effect (Welcome Message)

var welcomeMsgArray = ["WELCOME, I'M DARIO"];
var textPosition = 0;
var speed = 100;

typeWriter = () => {
    document.querySelector("#welcomeMsg").innerHTML = welcomeMsgArray[0].substring(0, textPosition);

    if (textPosition ++ != welcomeMsgArray[0].length)
        setTimeout(typeWriter, speed);
    
}

window.addEventListener("load", typeWriter);

// Scroll Back To Top Button
mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // fixed positioning of button for scroll to top
  if (document.documentElement.scrollTop > 20) {
    // no specified display
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// CountDown Timer To Birthday
const year = new Date().getFullYear();
const month = new Date().getMonth();

// Get Time For New Date
var countDownDate = new Date("Nov 22, 2022 00:00:00").getTime();

// Start Countdown - Store in a function

let timer = setInterval( function() {
  
  // Obtain Today's Date (in SGT) - Create New Date Object
  var todayDate = new Date().getTime();
  // Obtain the difference in timing between now and 22 Nov
  var diff = countDownDate - todayDate;

  // Calculate the number of days, hrs, mins and secs
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Display in HTML Format
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);