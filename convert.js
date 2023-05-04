"use strict";
console.log("hi");
window.onload = init;

function init() {
  console.log("init");
  const convertBtn = document.getElementById("convertBtn");
  convertBtn.onclick = onconvertBtnClicked;
}

function onconvertBtnClicked() {
  console.log("convert");
  const fahrenheit = document.getElementById("Fahrenheit");
  const celsius = document.getElementById("Celsius");
  const temp1 = fahrenheit.value;
  const convert = (temp1 - 32) * (5 / 9);
  celsius.value = convert;
}
