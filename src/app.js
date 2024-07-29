let alertShown = false;
let setIntervalID;

function cardGenerator() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suits = ["♦", "♥", "♠", "♣"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("numberCard").innerHTML = randomNumber;
  document.getElementById("suitLeftTop").innerHTML = randomSuit;
  document.getElementById("suitLeftTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightTop").innerHTML = randomSuit;
  document.getElementById("suitRightTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitLeftBottom").innerHTML = randomSuit;
  document.getElementById("suitLeftBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightBottom").innerHTML = randomSuit;
  document.getElementById("suitRightBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";

  console.log(`Your card is ${randomNumber} of ${randomSuit}`);
}

function showAlert(message, type) {
  const alertContainer = document.getElementById("alertContainer");
  alertContainer.className = `alert alert-${type} alert-dismissible fade show`;
  alertContainer.role = "alert";
  alertContainer.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
}

function startInterval() {
  setIntervalID = setInterval(cardGenerator, 10000);
}

function stopInterval() {
  clearInterval(setIntervalID);
}

document.querySelector(".btn").addEventListener("click", function() {
  cardGenerator();
  stopInterval();
  startInterval();
  if (!alertShown) {
    showAlert(
      "If you don't like your card it will automatically generate another one every 10 seconds or you can press the button, too.",
      "info"
    );
    alertShown = true;
  }
});

function resizeCard() {
  let heightInput = document.getElementById("heightCard").value;
  let widthInput = document.getElementById("widthCard").value;

  const maxHeight = 1000;
  const minHeight = 500;
  const maxWidth = 1000;
  const minWidth = 200;

  if (heightInput > maxHeight) {
    alert("The maximum height value allowed is 1000.", "danger");
    return;
  } else if (heightInput < minHeight) {
    alert("The minimum height value allowed is 500.", "danger");
    return;
  }

  if (widthInput > maxWidth) {
    alert("The maximum width value allowed is 1000.", "danger");
    return;
  } else if (widthInput < minWidth) {
    alert("The minimum width value allowed is 200.", "danger");
    return;
  }

  document.getElementById("card").style.height = heightInput + "px";
  document.getElementById("card").style.width = widthInput + "px";
}

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    resizeCard();
  }
});
