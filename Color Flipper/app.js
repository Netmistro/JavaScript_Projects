const colors = [
  "Green",
  "Red",
  "Purple",
  "limegreen",
  "orange",
  "blue",
  "rgba(133,122,200",
  "#f15025",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get a random nymber between 0-3
  const randomNumber = getRandomNumber();
  // Test using coneole log
  console.log(randomNumber);
  console.log(Math.random());

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
