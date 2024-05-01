import "../css/style.scss";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  const yearsSpan = document.querySelector(".years span");
  const monthsSpan = document.querySelector(".month span");
  const daysSpan = document.querySelector(".days span");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    yearsSpan.textContent = yearInput.value || "--";
    monthsSpan.textContent = monthInput.value || "--";
    daysSpan.textContent = dayInput.value || "--";
  });
});
