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