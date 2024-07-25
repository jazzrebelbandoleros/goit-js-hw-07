function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnDestroyEl.style.backgroundColor = `#ff4e4e`;

function createBoxes(amount) {
  destroyBoxes();
  let elements = "";
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    elements += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }
  boxesEl.innerHTML = elements;
}

const onCreateBtnClick = () => {
  const amount = +inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert(`Enter a number from 1 to 100`);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
};

btnCreateEl.addEventListener("click", onCreateBtnClick);
btnDestroyEl.addEventListener("click", destroyBoxes);
