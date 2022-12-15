var hamburgerMenu = document.getElementById("display-menu");
var div = document.getElementById("display");
var body = document.getElementById("body-background");
var heading = document.getElementById("heading");
var grey = document.getElementById("item-grey");
var red = document.getElementById("item-red");
var orange = document.getElementById("item-orange");
var purple = document.getElementById("item-purple");
var green = document.getElementById("item-green");

hamburgerMenu.addEventListener("mouseover", function () {
  div.classList.toggle("menu");
  console.log(div.classList);
});

grey.addEventListener("click", function () {
  body.classList = "grey-background";
  div.classList.toggle("menu");
  heading.textContent = "grey";
});

red.addEventListener("click", function () {
  body.classList = "red-background";
  div.classList.toggle("menu");
  heading.textContent = "red";
});

orange.addEventListener("click", function () {
  body.classList = "orange-background";
  div.classList.toggle("menu");
  heading.textContent = "orange";
});

purple.addEventListener("click", function () {
  body.classList = "purple-background";
  div.classList.toggle("menu");
  heading.textContent = "purple";
});

green.addEventListener("click", function () {
  body.classList = "green-background";
  div.classList.toggle("menu");
  heading.textContent = "green";
});
