const darkModeBtn = document.querySelector(".dark-mode-btn");
const slider = document.querySelector(".slider");

function darkModeToggle() {
  const body = document.getElementById("body-tag");
  const changeCard = document.querySelectorAll(".weather-card");

  darkModeBtn.classList.toggle("dark-mode-active");
  slider.classList.toggle("slider-active");
  body.classList.toggle("body-dark-mode-active");
  searchForm.classList.toggle("dark-mode-form");
  changeCard.forEach((item, index) => {
    changeCard[index] = item.classList.toggle("dark-mode-card");
  });
  weatherContainer.classList.toggle("dark-content");
  clearBtn.classList.toggle("clear-btn-dark");
}

darkModeToggle();

slider.addEventListener("click", () => {
  darkModeToggle();
});
