// TASK 6

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    boxesContainer.innerHTML = "";

    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.background = getRandomHexColor();
        elements.push(div);
        size += 10;
    }

    boxesContainer.append(...elements);
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {

    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = "";
    } else {
        alert("Amount can't be bigger than 100 and smaller than 0!");
    }
});

destroyBtn.addEventListener("click", destroyBoxes);