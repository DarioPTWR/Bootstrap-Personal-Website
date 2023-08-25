// Author : DarioTeh
// Date : 20/7/2022
// JavaScript File : feedbackpage.js

// Typing Effect
typingEffect = () => {
    var typed = new Typed(".auto-input", {
    // storing the typed strings into an array and accessed one by one
    strings: ["is greatly valued!", "will be cherished!", "is extremely helpful!"],
    // speed of typing in ms
    typeSpeed: 100,
    backSpeed: 150,
    loop: true
    });
};
// add multiple events to a particular element
window.addEventListener("load", typingEffect);

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

// Feedback Form Validations

// PopUp Message To Confirm Reset
function clicked(e)
{
    if(!confirm('Are You Sure You Wish to Reset the Form ?')) {
        e.preventDefault();
    }
}

