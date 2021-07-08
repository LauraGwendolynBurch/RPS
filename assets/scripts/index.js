// array of random icons
const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const butttons = document.querySelectorAll(".selection button");
const showIcon = document.querySelector(".me i");
const computerShowIcon = document.querySelector(".computer i");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const text = document.getElementById("demo");
const text2 = document.getElementById("demo2");
let computerScore = 0;
let playerScore = 0;
const page = document.querySelector(".game");

function round() {
  butttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //   console.log(e.target);
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;

      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];

      if (showIcon.className === computerShowIcon.className) {
        pScore.textContent = pScore.textContent;
        cScore.textContent = cScore.textContent;
        text.textContent = "It's a Tie ! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[0] &&
        computerShowIcon.className === randomClasses[1]
      ) {
        computerScore++;
        cScore.textContent = computerScore;
        text.textContent = "You lost! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[0] &&
        computerShowIcon.className === randomClasses[2]
      ) {
        playerScore++;
        pScore.textContent = playerScore;
        text.textContent = "You win! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[1] &&
        computerShowIcon.className === randomClasses[2]
      ) {
        computerScore++;
        cScore.textContent = computerScore;
        text.textContent = "You lost! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[1] &&
        computerShowIcon.className === randomClasses[0]
      ) {
        playerScore++;
        pScore.textContent = playerScore;
        text.textContent = "You win! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[2] &&
        computerShowIcon.className === randomClasses[0]
      ) {
        computerScore++;
        cScore.textContent = computerScore;
        text.textContent = "You lost! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      } else if (
        showIcon.className === randomClasses[2] &&
        computerShowIcon.className === randomClasses[1]
      ) {
        playerScore++;
        pScore.textContent = playerScore;
        text.textContent = "You win! ";
        text.style.color = "crimson";
        text2.textContent = text.textContent;
        text2.style.color = "crimson";
      }
      if (playerScore === 3) {
        page.innerHTML = "You won the game!";
      } else if (computerScore === 3) {
        page.innerHTML = "You lost to a robot!";
      }
    });
  });
}

round();
