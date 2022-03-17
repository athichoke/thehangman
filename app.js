//array
const answer = ["b", "r", "a", "i", "n", "e", "r", "g", "y"];
const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let txt = "";
let life = 5;
let pointLose = 0;
let pointWin = 0;
const answerId = document.getElementById("answerId");
const buttonSection = document.getElementById("buttonSection");
const reset = document.getElementById("reset");

function getAnswer() {
  const answerId = document.getElementById("answerId");
  for (let i = 0; i < answer.length; i++) {
    let answerCreate = document.createElement("h2");
    answerCreate.innerHTML = answer[i];
    answerId.appendChild(answerCreate);
  }
}

function generateButton() {
  for (let i = 0; i < letter.length; i++) {
    let buttonCreate = document.createElement("button");
    buttonCreate.innerHTML = letter[i];
    buttonSection.appendChild(buttonCreate);
    buttonCreate.addEventListener("click", function () {
      checkAnswer(i);
    });
  }
}

console.log(pointLose);

function checkAnswer(i) {
  const nodeAnswer = document.querySelectorAll("h2");
  for (let j = 0; j < answer.length; j++) {
    if (letter[i] === answer[j]) {
      pointLose++;
      nodeAnswer[j].style.color = "black";
    }
  }
  checkIfCorrect();
}

function lifeUpdate() {
  document.getElementById("life").innerHTML = life;
}

function checkIfCorrect() {
  if (pointLose < 1) {
    life--;
  } else {
    pointWin++;
  }
  pointLose = 0;
  lifeUpdate();
  updateImage();
  ifLose();
  ifWin();
}

function updateImage() {
  document.getElementById("hangmanImage").src = "./img/" + life + ".jpg";
}

function ifLose() {
  if (life === 0) {
    document.getElementById("life").innerHTML = "";
    document.getElementById("afterLife").innerHTML =
      "How come you don't know the answer.";
    buttonSection.style.display = "none";
    answerId.style.display = "none";
    reset.style.display = "block";
  }
}

function ifWin() {
  if (pointWin > 7) {
    document.getElementById("life").innerHTML = "";
    document.getElementById("afterLife").innerHTML = "You win!";
    buttonSection.style.display = "none";
    answerId.style.display = "none";
    reset.style.display = "block";
    document.getElementById("hangmanImage").src = "./img/win.jpg";
  }
}

reset.addEventListener("click", function () {
  life = 5;
  pointWin = 0;
  lifeUpdate();
  updateImage();
  reset.style.display = "none";
  buttonSection.style.display = "inline-block";
  answerId.style.display = "block";
  document.getElementById("afterLife").innerHTML = " chances left";
  document.querySelectorAll("h2").forEach(resetFont);
  document.getElementById("hangmanImage").src = "./img/5.jpg";
});

function resetFont(item) {
  item.style.color = "transparent";
}

lifeUpdate();
getAnswer();
generateButton();
updateImage();
