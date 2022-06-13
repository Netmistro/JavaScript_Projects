// Grab all constants here
const textSpan = document.querySelector(".hex");
const hexBtn = document.querySelector(".btn");
const backColor = document.querySelector("body");
const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Event listeners
hexBtn.addEventListener("click", generateHEX);

// Add funtions here
function generateHEX() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    // Generate a random Hex number each iteration
    let randomHex = Math.floor(Math.random() * hexCharacters.length);
    hex += hexCharacters[randomHex];
  }
  backColor.style.backgroundColor = hex;
  textSpan.innerHTML = hex;
  console.log(hex);
}
