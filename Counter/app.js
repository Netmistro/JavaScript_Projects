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
  count++;
  Counter.innerText = count;
  countCheck();
}

function MinusCount() {
  count--;
  Counter.innerText = count;
  countCheck();
}

// Function to check where the count is at
function countCheck() {
  if (count < 0) {
    Counter.style.color = "red";
    Counter.animate([{ opacity: 0.2 }, { opacity: 1.0 }], {
      duration: 500,
      fill: "forwards",
    });
  } else if (count > 0) {
    Counter.style.color = "green";
    Counter.animate([{ opacity: 0.2 }, { opacity: 1.0 }], {
      duration: 500,
      fill: "forwards",
    });
  } else {
    Counter.style.color = "white";
  }
}
