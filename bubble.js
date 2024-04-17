let body = document.querySelector(".body");
let hit;
let allnumber;
let scoreint = 0;
let start = document.querySelector(".start");
let body2 = document.querySelector(".body2");
function makebubble() {
  let count = "";

  for (let i = 1; i <= 170; i++) {
    count += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  body.innerHTML = count;
}

var timer = 60;

function runtime() {
  document.querySelector(".timer").innerHTML = 60;
  var timerint = setInterval(function () {
    if (timer == 0) {
      gameover();
    }
    if (timer > 0) {
      timer--;
      console.log(timer);
      document.querySelector(".timer").innerHTML = timer;
    } else {
      clearInterval(timerint);
      body.innerHTML = "Game Over";
      body.style.fontSize = "10vw";
    }
  }, 1000);
}

function gethit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = hit;
}

body.addEventListener("click", function (ele) {
  click();
  allnumber = Number(ele.target.textContent);
  console.log(allnumber);
  // allnumber = allnumber + allnumber;
  // console.log(allnumber);
  if (allnumber == hit) {
    score();
    makebubble();
    gethit();
  }
});

function score() {
  scoreint += 10;
  document.querySelector(".score").innerHTML = scoreint;
  console.log(scoreint);
}

start.addEventListener("click", function () {
  starting();
  if (timer == 60 || timer == 0) {
    makebubble();
    runtime();
    gethit();
    body.style.fontSize = "2vw";
    timer = 60;
  }
});

function gameover() {
  let sound = new Audio("gameover2.mp3");
  sound.play();
}

function click() {
  let sound = new Audio("clicksound.mp3");
  sound.play();
}

function starting() {
  let sound = new Audio("gameover.mp3");
  sound.play();
}
