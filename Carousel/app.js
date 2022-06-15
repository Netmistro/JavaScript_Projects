// Constants here
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const container = document.querySelector(".carousel");
let counter = 0;

// Event listeners here
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Locad the default image at startup to avoid the yellow background
container.style.backgroundImage = `url(./img/BJP_0000.png)`;

// Functions here
function prevSlide() {
  container.animate([{ opacity: 0.1 }, { opacity: 1.0 }], {
    duration: 1000,
    fill: "forwards",
  });
  if (counter == 0) {
    counter = 8;
  }
  counter--;
  container.style.backgroundImage = `url(./img/BJP_000${counter}.png`;
}

function nextSlide() {
  container.animate([{ opacity: 0.1 }, { opacity: 1.0 }], {
    duration: 1000,
    fill: "forwards",
  });
  if (counter == 8) {
    counter = 0;
  }
  counter++;
  container.style.backgroundImage = `url(./img/BJP_000${counter}.png)`;
}
