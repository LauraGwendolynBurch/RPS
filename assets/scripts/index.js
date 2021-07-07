// array of random icons
const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const butttons = document.querySelectorAll(".selection button");
const showIcon = document.querySelector(".show i");
const computerShowIcon = document.querySelector(".computer i");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const text = document.getElementById("demo");
const text2 = document.getElementById("demo2");
let computerScore = 1;
let playerScore = 1;

function round() {
  butttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //   console.log(e.target);
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;

      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];

      if (showIcon.className === computerShowIcon.className) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        text.innerHTML = "It's a Tie ! ";
        text.style.color = "crimson";
        text2.innerHTML = text.innerHTML;
        text2.style.color = "crimson";
      }
    });
  });
}

round();
