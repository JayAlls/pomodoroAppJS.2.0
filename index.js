const wm_timer = document.getElementById("wm_timer");
const ws_timer = document.getElementById("ws_timer");
const bm_timer = document.getElementById("bm_timer");
const bs_timer = document.getElementById("bs_timer");
const counter = document.getElementById("counter");
const reset = document.getElementById("resetBtn");
const stopBtn = document.getElementById("stopBtn");
const start = document.getElementById("startBtn");

counter.innerHTML = 0;

let startAudio = new Audio("./sons/start.mp3");
let breakAudio = new Audio("./sons/break.mp3");

let startTimer;

start.addEventListener("click", () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
    startAudio.play();
  } else {
    alert("Timer is already");
  }
});

reset.addEventListener("click", () => {
  wm_timer.innerHTML = 25;
  ws_timer.innerHTML = "00";

  bm_timer.innerHTML = 5;
  bs_timer.innerHTML = "00";

  counter.innerHTML = 0;

  stopInterval();
  startTimer = undefined;
});

stopBtn.addEventListener("click", () => {
  stopInterval();
  startTimer = undefined;
});

function timer() {
  if (ws_timer.innerHTML > 0) {
    ws_timer.innerHTML--;
  } else if (ws_timer.innerHTML <= 0 && wm_timer.innerHTML > 0) {
    ws_timer.innerHTML = 59;
    wm_timer.innerHTML--;
  }

  if (ws_timer.innerHTML <= 0 && wm_timer.innerHTML <= 0) {
    breakAudio.play();
    if (bs_timer.innerHTML > 0) {
      bs_timer.innerHTML--;
    } else if (bs_timer.innerHTML <= 0 && bm_timer.innerHTML > 0) {
      bs_timer.innerHTML = 59;
      bm_timer.innerHTML--;
    }
  }

  if (
    ws_timer.innerHTML <= 0 &&
    wm_timer.innerHTML <= 0 &&
    bm_timer.innerHTML <= 0 &&
    bs_timer.innerHTML <= 0
  ) {
    wm_timer.innerHTML = 25;
    ws_timer.innerHTML = "00";

    bm_timer.innerHTML = 5;
    bs_timer.innerHTML = "00";

    counter.innerHTML++;
  }
}

function stopInterval() {
  clearInterval(startTimer);
}
