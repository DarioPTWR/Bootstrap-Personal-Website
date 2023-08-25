// Author : DarioTeh
// Date : 20/7/2022
// JavaScript File : experiencespage.js

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
