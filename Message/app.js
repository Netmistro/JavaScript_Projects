// Constants here
const messageBtn = document.querySelector("#sendBtn");
const inputMessage = document.querySelector("#messageIn");
const deliveredMessage = document.querySelector("#messageOut");
inputMessage.value = "";

// Event Listeners
messageBtn.addEventListener("click", deliverMessage);

// Functions
function deliverMessage() {
  let myMessage = inputMessage.value;
  if (myMessage == "") {
    deliveredMessage.innerText = "Please Type a Message";
  } else {
    deliveredMessage.innerText = myMessage;
    inputMessage.value = "";
  }
}
