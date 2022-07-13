const board = document.querySelector("#board");
const colors = ["#ecf0f1", "#bdc3c7", "#95a5a6", "#636e72", "#2d3436"];
const SQUARES_NUMBER = 3000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  element.style.backgroundColor = "#111111";
}

function getRandomColor(element) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
