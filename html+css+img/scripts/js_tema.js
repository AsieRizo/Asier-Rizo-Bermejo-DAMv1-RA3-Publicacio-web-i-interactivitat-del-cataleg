//Part D
// Variables
const button = document.querySelector(".background_switch");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});