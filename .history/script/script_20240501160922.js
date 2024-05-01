import "../css/style.scss";

console.log("hello");

const form = document.querySelector("#form");

console.log("Form:", form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const year = data.get("year");
  const month = data.get("month");
  const day = data.get("day");

  console.log(`year: ${year}, month: ${month}, day: ${day}`);

  const yearsSpan = document.querySelector(".years span");
  const monthsSpan = document.querySelector(".month span");
  const daysSpan = document.querySelector(".days span");

  yearsSpan.textContent = year.trim() === "" ? "--" : year;
  monthsSpan.textContent = month.trim() === "" ? "--" : month;
  daysSpan.textContent = day.trim() === "" ? "--" : day;
}

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Form submitted");

//   const form = document.querySelector(".form");
//   console.log("Form element:", form);

//   const dayInput = document.getElementById("day");
//   const monthInput = document.getElementById("month");
//   const yearInput = document.getElementById("year");

//   console.log("Inputs:", dayInput, monthInput, yearInput);

//   const yearsSpan = document.querySelector(".years span");
//   const monthsSpan = document.querySelector(".month span");
//   const daysSpan = document.querySelector(".days span");

//   console.log("Span elements:", yearsSpan, monthsSpan, daysSpan);

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("Form submitted");

//     yearsSpan.textContent = yearInput.value || "--";
//     monthsSpan.textContent = monthInput.value || "--";
//     daysSpan.textContent = dayInput.value || "--";
//   });
// });
