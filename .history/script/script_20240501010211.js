import "../css/style.scss";
console.log("Hello, World!");

const form = document.querySelector(".form");
const inputField = document.querySelector("input");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
