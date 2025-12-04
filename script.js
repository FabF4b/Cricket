let playerList = [];
let cricketTargets = [];
let Score = 0;
let displayPlayerlist = document.getElementById("listPlayer");
let displayName = document.getElementById("player-name");
let score1 = document.getElementById("cricket-score-1");
let score2 = document.getElementById("cricket-score-2");
let score3 = document.getElementById("cricket-score-3");
let score4 = document.getElementById("cricket-score-4");
let score5 = document.getElementById("cricket-score-5");
let score6 = document.getElementById("cricket-score-6");
let score7 = document.getElementById("cricket-score-7");
const playerContainer = document.getElementById("container-player");
const target_1 = document.getElementById("t1");
const target_2 = document.getElementById("t2");
const target_3 = document.getElementById("t3");
const target_4 = document.getElementById("t4");
const target_5 = document.getElementById("t5");
const target_6 = document.getElementById("t6");

// add player btn //
document.getElementById("addPlayer").addEventListener("click", () => {
  const inputPlayername = document.getElementById("newPlayer");
  const playername = inputPlayername.value;

  if (playername !== "") {
    playerList.push(playername);
    displayPlayerlist.innerHTML = playerList.join("<br>");
  }
  inputPlayername.value = "";
  addPlayerColum(playername);
});

// clear player btn //
document.getElementById("clearList").addEventListener("click", () => {
  playerList = [];
  cricketTargets = [];
  displayPlayerlist.innerHTML = playerList;
});

// start game btn //
document.getElementById("startgame").addEventListener("click", () => {
  if (playerList.length >= 2) {
    createCricketArray();
    displayCricketArray();
  }
});

// target Array erstellen und sortieren //
function createCricketArray() {
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
}

// cricketzahlen dem board hinzufügeb (single-werte) //
function displayCricketArray() {
  score1.innerHTML = cricketTargets[0];
  score2.innerHTML = cricketTargets[1];
  score3.innerHTML = cricketTargets[2];
  score4.innerHTML = cricketTargets[3];
  score5.innerHTML = cricketTargets[4];
  score6.innerHTML = cricketTargets[5];
}

// spieler block unten hinzufügen //
function addPlayerColum(playername) {
  const playerDiv = document.createElement("div");
  const playerInfo = document.createElement("div");
  const playerScore = document.createElement("div");
  const playerName = document.createElement("div");

  playerDiv.classList.add("player");
  playerInfo.classList.add("player-info");
  playerScore.classList.add("playerScore");
  playerName.classList.add("playerName", "flex-center");
  playerName.id = playername;

  playerContainer.appendChild(playerDiv);
  playerDiv.prepend(playerInfo);
  playerInfo.appendChild(playerScore);
  playerInfo.appendChild(playerName);

  for (let i = 0; i < 7; i++) {
    const playerTarget = document.createElement("div");
    playerTarget.classList.add("target");
    playerDiv.appendChild(playerTarget);
  }
  playerName.innerHTML = playername;
  playerScore.innerHTML = Score;
}
