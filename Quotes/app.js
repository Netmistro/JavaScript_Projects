const quotes = [
  { name: "Stephen King", quote: "This is the life" },
  {
    name: "Demi Moore",
    quote:
      "I'm a success today because I had a friend who believed in me and I don't have the heart to et him down",
  },
  {
    name: "John F. Kennedy",
    quote: "Those who dare to fail miserably can chieve greatly",
  },
  {
    name: "Ernest Hemingway",
    quote:
      "It’s none of their business that you have to learn how to write. Let them think you were born that way.",
  },
];

// Issue constants and variables here
const quoteBtn = document.querySelector(".btn-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// Event Listeners here
quoteBtn.addEventListener("click", displayQuote);

// Functions here
function displayQuote() {
  // Generate a random number from the array list
  randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[randomQuote].name;
  author.innerHTML = quotes[randomQuote].quote;
}
