// Add sticky class to the navbar when you scroll past it
window.onscroll = function() {addStickyClass()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function addStickyClass() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
