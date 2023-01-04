let mainDiv = document.querySelectorAll("#box");
let boxes = [...mainDiv];
let flag = false;
let player = "X";
let result = false;
function changeFlag() {
  flag = !flag;
  player = flag ? "O" : "X";
}

function checkwin() {
  let spanbox = document.getElementsByClassName("span-box");
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  winningCombinations.forEach((combination) => {
    let [a, b, c] = combination;
    if (
      spanbox[a].innerText !== "" &&
      spanbox[a].innerText === spanbox[b].innerText &&
      spanbox[b].innerText === spanbox[c].innerText
    ) {
     
      document.getElementById(
        "status"
      ).innerText = `Player ${spanbox[a].innerText} won`;
      document.getElementById("gif").classList.remove("hidden")
      result = true;
    }
  });
}
boxes.forEach((eachBox) => {
  let spanbox = eachBox.childNodes[0];

  eachBox.addEventListener(
    "click",
    (e) => {
      spanbox.innerText = player;
      changeFlag();
      checkwin();
      if (!result) {
        document.getElementById("status").innerText = `Player ${player} Turn`;
      }
    },
    { once: true }
  );
});

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  location.reload();
});
