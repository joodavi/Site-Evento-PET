// events

var divDay1 = document.getElementById("day-1");
var divDay2 = document.getElementById("day-2");
var divDay3 = document.getElementById("day-3");

var buttonDay1 = document.getElementById("button-day-1");
var buttonDay2 = document.getElementById("button-day-2");
var buttonDay3 = document.getElementById("button-day-3");

buttonDay1.addEventListener('click', () => {
  divDay1.style.display = "flex";
  divDay2.style.display = "none";
  divDay3.style.display = "none";
})

buttonDay2.addEventListener('click', () => {
  divDay1.style.display = "none";
  divDay2.style.display = "flex";
  divDay3.style.display = "none";
})

buttonDay3.addEventListener('click', () => {
  divDay1.style.display = "none";
  divDay2.style.display = "none";
  divDay3.style.display = "flex";
})

// navbar menu

function openMenu() {
  document.getElementById("nav-bar").style.height = "100%";
}

function closeMenu() {
  document.getElementById("nav-bar").style.height = "0";
} 

// slider

var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
  showSlides(sliderIndex+=n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  if (n > slides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = slides.length;
  }

  for(i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[sliderIndex-1].style.display = "block";
}

// sidenav
window.onscroll = function() {
  scroll();
}

function scroll() {
  var sidenav = document.getElementById("sidenav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    sidenav.style.right = "0px";
  } else {
    sidenav.style.right = "-170px";
  }
}