// array of random icons
const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const butttons = document.querySelectorAll(".selection button");
const showIcon = document.querySelector(".show i");

function round() {
  butttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.target);
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;
    });
  });
}

round();
