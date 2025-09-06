// TASK 5

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color");

const color = document.querySelector(".color");

btn.addEventListener("click", (event) => {
    document.body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
});