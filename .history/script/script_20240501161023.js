import "../css/style.scss";

const form = document.querySelector("#form");

console.log("Form:", form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const year = data.get("year");
  const month = data.get("month");
  const day = data.get("day");

  const yearsSpan = document.querySelector(".years span");
  const monthsSpan = document.querySelector(".month span");
  const daysSpan = document.querySelector(".days span");

  yearsSpan.textContent = year.trim() === "" ? "--" : year;
  monthsSpan.textContent = month.trim() === "" ? "--" : month;
  daysSpan.textContent = day.trim() === "" ? "--" : day;
}
