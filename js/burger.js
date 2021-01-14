const burger = document.querySelector(".burger");
const darkContainer = document.querySelector(".dark-mode-container");
const navbar = document.querySelector(".navbar");
const credits = document.querySelector(".credits");

burger.addEventListener("click", () => {
  navbar.classList.toggle("h-nav");
  setTimeout(() => {
    darkContainer.classList.toggle("vis-class");
    credits.classList.toggle("vis-class");
  }, 500);
});
