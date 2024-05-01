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

    let hasError = false;
    if (!dayInput.value || dayInput.value > 31 || dayInput.value < 1) {
      alert("Please enter a valid day.");
      hasError = true;
    }
    if (!monthInput.value || monthInput.value > 12 || monthInput.value < 1) {
      alert("Please enter a valid month.");
      hasError = true;
    }
    if (!yearInput.value || yearInput.value < 1900) {
      // Assuming 1900 as a reasonable cutoff.
      alert("Please enter a valid year.");
      hasError = true;
    }

    if (!hasError) {
      yearsSpan.textContent = yearInput.value;
      monthsSpan.textContent = monthInput.value;
      daysSpan.textContent = dayInput.value;
    } else {
      yearsSpan.textContent = "--";
      monthsSpan.textContent = "--";
      daysSpan.textContent = "--";
    }
  });
});
