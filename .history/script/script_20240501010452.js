import "../css/style.scss";
console.log("Hello, World!");

const form = document.querySelector(".form");
const inputField = document.querySelector("input");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

input.addEventListener("input", updateValue);

function handleEvent(e) {
  e.preventDefault();
  if (year && month && day) {
    const yearValue = year.value;
    const monthValue = month.value;
    const dayValue = day.value;
    if (yearValue && monthValue && dayValue) {
      const date = new Date(yearValue, monthValue - 1, dayValue);
      const age = getAge(date);
      const ageInDays = getAgeInDays(date);
      displayResult(age, ageInDays);
    } else {
      displayError();
    }
  }
}
