const btn = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset-btn");
const playBtn = document.querySelector(".play-btn");
const msg = document.querySelector(".msg");
const hide = document.querySelector(".hide")
const winnerMsg = document.querySelector("#winner");
const winnerH1 = document.querySelector(".winner-h1");
const container = document.querySelector("#container");
const img = document.querySelector("#img");

let trun0 = true;

resetBtn.addEventListener("click", () => {
  btn.forEach(btn => {
    btn.innerHTML = "";
  });
  // trun0= true;
});

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];



let count = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (trun0) {
      btn.innerHTML = "0";
      trun0 = false;
      count++;
    } else {
      btn.innerHTML = "X";
      trun0 = true;
      count++;
    }
    console.log(count);

    if (count === 9) {
      matchDraw();
    }

    btn.disabled = true;

    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
  count = 0;
});


function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1val = btn[pattern[0]].innerHTML;
    let pos2val = btn[pattern[1]].innerHTML;
    let pos3val = btn[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        container.classList.add("bg-opacity");
        winnerMsg.classList.remove("hide");
        img.src = `./assets/victory.gif`;
        winnerH1.innerHTML = `Congratulations`;
        showWinner(pos1val);
      }
    }
  }
}


const matchDraw = () => {
  img.src = "";
  img.src = `./assets/lost.gif`;
  winnerMsg.classList.remove("hide");
  winnerH1.innerHTML = `Match Draw`;
  msg.innerHTML = "No One Wins!"
}


const resetGame = () => {
  trun0 = true;
  enableBtn();
};

const enableBtn = () => {
  btn.forEach((btn) => {
    btn.disabled = false;
    btn.innerHTML = "";
  });
};

const disableBtn = () => {
  btn.forEach((btn) => {
    btn.disabled = true;
  });
};


const showWinner = (winner) => {
  msg.innerHTML = `Player ${winner} Won The Game`;

};

playBtn.addEventListener("click", () => {
  winnerMsg.classList.add("hide");
  container.classList.remove("bg-opacity");
  disableBtn();
  resetGame();
  count = 0;
});



