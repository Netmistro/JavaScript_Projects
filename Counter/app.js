// Selectors here
const upCount = document.querySelector(".up-count");
const downCount = document.querySelector(".down-count");
const Counter = document.querySelector(".counter");
let count = 0;

// Event listeners here
upCount.addEventListener("click", AddCount);
downCount.addEventListener("click", MinusCount);

// Functions here
function AddCount() {
  count = count + 1;
  Counter.innerText = count;
  countCheck();
}

function MinusCount() {
  count = count - 1;
  Counter.innerText = count;
  countCheck();
}

// Function to check where the count is at
function countCheck() {
  if (count < 0) {
    Counter.style.color = "red";
  } else if (count > 0) {
    Counter.style.color = "green";
  } else {
    Counter.style.color = "black";
  }
}
