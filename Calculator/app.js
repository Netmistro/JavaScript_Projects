// Selectors
const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

// Function for all the other data Buttons using a loop
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let number = btns[i].getAttribute('data-num');
    screen.value += number;
  });
}

// Function for Equal Button
equalBtn.addEventListener('click', function () {
  if (screen.value === '') {
    alert('Invalid Input');
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

// Function for Clear Button
clearBtn.addEventListener('click', function () {
  screen.value = '';
});

// The calculator has a flaw in that it willl allow two  or more operators to be entered in succession
