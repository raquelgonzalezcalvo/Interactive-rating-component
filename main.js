"use strict";

//variables
let selectNumbers = document.querySelector(".js-numbers");
// console.log(selectNumber);
let rateNumber = document.querySelector(".js-thankyou");
let submit = document.querySelector(".js-submit");

//funciones
const handleClick = (ev) => {
  let numberSelected = ev.target.innerText;
  rateNumber.innerText = numberSelected;
  // console.log(ev.target.innerText);
  ev.preventDefault();
  // console.log("se hizo click");
};

const handleSubmit = (ev) => {
  console.log("submit");
};

//eventos
selectNumbers.addEventListener("click", handleClick);
submit.addEventListener("click", handleSubmit);
