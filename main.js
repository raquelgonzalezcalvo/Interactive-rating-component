"use strict";

//variables
let selectNumbers = document.querySelector(".js-numbers");
let rateNumber = document.querySelector(".js-span");
let submit = document.querySelector(".js-submit");
let onePage = document.querySelector(".js-rating");
let twoPage = document.querySelector(".js-thankyou");

//funciones
const handleClick = (ev) => {
  let numberSelected = ev.target.innerText;
  rateNumber.innerText = numberSelected;
};

const handleSubmit = () => {
  onePage.style.display = "none";
  twoPage.style.display = "flex";
};

//eventos
selectNumbers.addEventListener("click", handleClick);
submit.addEventListener("click", handleSubmit);
