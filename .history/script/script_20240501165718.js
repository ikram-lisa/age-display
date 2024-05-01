import "../css/style.scss";

// const form = document.querySelector("#form");

// console.log("Form:", form);

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   const year = data.get("year");
//   const month = data.get("month");
//   const day = data.get("day");

//   const yearsSpan = document.querySelector(".years span");
//   const monthsSpan = document.querySelector(".month span");
//   const daysSpan = document.querySelector(".days span");

//   yearsSpan.textContent = year.trim() === "" ? "--" : year;
//   monthsSpan.textContent = month.trim() === "" ? "--" : month;q
//   daysSpan.textContent = day.trim() === "" ? "--" : day;
// }

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const inputs = document.querySelectorAll("#form input[type='number']");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("error");
      const errorSpan = this.parentNode.querySelector(".error-message");
      errorSpan.style.display = "none";

      this.classList.add("active");

      if (!validateInput(this)) {
        this.classList.add("error");
        this.classList.remove("active");
        errorSpan.style.display = "block";
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    inputs.forEach((input) => {
      if (!validateInput(input)) {
        input.classList.add("error");
        input.parentNode.querySelector(".error-message").style.display =
          "block";
        isValid = false;
      }
    });

    if (isValid) {
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
  });
});

function validateInput(input) {
  const name = input.name;
  const value = input.value;
  switch (name) {
    case "day":
      return value >= 1 && value <= 31;
    case "month":
      return value >= 1 && value <= 12;
    case "year":
      return (
        value.length === 4 && value >= 1900 && value <= new Date().getFullYear()
      );
    default:
      return false;
  }
}
