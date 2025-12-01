let playerList = [];
let cricketTargets = [];
let displayPlayer = document.getElementById("listPlayer");

let score1 = document.getElementById("cricket-score-1");
let score12 = document.getElementById("cricket-score-1-2");
let score13 = document.getElementById("cricket-score-1-3");
let score2 = document.getElementById("cricket-score-2");
let score22 = document.getElementById("cricket-score-2-2");
let score23 = document.getElementById("cricket-score-2-3");
let score3 = document.getElementById("cricket-score-3");
let score32 = document.getElementById("cricket-score-3-2");
let score33 = document.getElementById("cricket-score-3-3");
let score4 = document.getElementById("cricket-score-4");
let score42 = document.getElementById("cricket-score-4-2");
let score43 = document.getElementById("cricket-score-4-3");
let score5 = document.getElementById("cricket-score-5");
let score52 = document.getElementById("cricket-score-5-2");
let score53 = document.getElementById("cricket-score-5-3");
let score6 = document.getElementById("cricket-score-6");
let score62 = document.getElementById("cricket-score-6-2");
let score63 = document.getElementById("cricket-score-6-3");
let score7 = document.getElementById("cricket-score-7");
let score72 = document.getElementById("cricket-score-7-2");

// add player btn //
document.getElementById("addPlayer").addEventListener("click", () => {
  const inputPlayer = document.getElementById("newPlayer");
  const nameplayer = inputPlayer.value;

  if (nameplayer !== "") {
    playerList.push(nameplayer);
    displayPlayer.innerHTML = playerList.join("<br>");
  }
  inputPlayer.value = "";
});

// clear player btn //
document.getElementById("clearList").addEventListener("click", () => {
  playerList = [];
  displayPlayer.innerHTML = playerList;
});

// start game btn //
const target_1 = document.getElementById("t1");
const target_2 = document.getElementById("t2");
const target_3 = document.getElementById("t3");
const target_4 = document.getElementById("t4");
const target_5 = document.getElementById("t5");
const target_6 = document.getElementById("t6");

document.getElementById("startgame").addEventListener("click", () => {
  const cricket_1 = target_1.value;
  const cricket_2 = target_2.value;
  const cricket_3 = target_3.value;
  const cricket_4 = target_4.value;
  const cricket_5 = target_5.value;
  const cricket_6 = target_6.value;

  cricketTargets.push(
    cricket_1,
    cricket_2,
    cricket_3,
    cricket_4,
    cricket_5,
    cricket_6
  );
  cricketTargets.sort((a, b) => b - a);

  if (
    (cricket_1 !== "",
    cricket_2 !== "",
    cricket_3 !== "",
    cricket_4 !== "",
    cricket_5 !== "",
    cricket_6 !== "" && playerList.length >= 2)
  ) {
    console.log("geht!");
    displayCricketNumbers();
  }
});

// cricketzahlen dem board hinzufügeb (single-werte) //

function displayCricketNumbers() {
  score1.innerHTML = cricketTargets[0];
  score2.innerHTML = cricketTargets[1];
  score3.innerHTML = cricketTargets[2];
  score4.innerHTML = cricketTargets[3];
  score5.innerHTML = cricketTargets[4];
  score6.innerHTML = cricketTargets[5];
}

// display double-werte //
