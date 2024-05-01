import "../css/style.scss";

console.log("hello");

ddocument.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const form = document.querySelector(".form");
  console.log("Form element:", form);

  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  console.log("Inputs:", dayInput, monthInput, yearInput);

  const yearsSpan = document.querySelector(".years span");
  const monthsSpan = document.querySelector(".month span");
  const daysSpan = document.querySelector(".days span");

  console.log("Span elements:", yearsSpan, monthsSpan, daysSpan);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Form submitted");

    yearsSpan.textContent = yearInput.value || "--";
    monthsSpan.textContent = monthInput.value || "--";
    daysSpan.textContent = dayInput.value || "--";
  });
});
