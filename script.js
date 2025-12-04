let playerList = [];
let cricketTargets = [];
let currentScore = 0;
const playerContainer = document.getElementById("container-player");

// add player btn - spieler hinzufügen //
document.getElementById("addPlayer").addEventListener("click", () => {
  const newPlayer = document.getElementById("newPlayer");
  const namePlayer = newPlayer.value;
  if (namePlayer !== "") {
    playerList.push({
      name: `${namePlayer}`,
      score: 0,
    });
  }
  newPlayer.value = "";
  showPlayerlist();
});

// spieler in liste anzeigen //
function showPlayerlist() {
  const namen = playerList.map((player) => player.name);
  document.getElementById("player-list").innerHTML = namen.join("<br>");
}

// spieler block unten hinzufügen //
function addPlayerColum(namePlayer) {
  const newPlayerDiv = document.createElement("div");
  const newPlayerInfo = document.createElement("div");
  const newPlayerScore = document.createElement("div");
  const newPlayerName = document.createElement("div");

  for (let i = 0; i < 7; i++) {
    const playerTarget = document.createElement("div");
    playerTarget.classList.add("target");
    newPlayerDiv.appendChild(playerTarget);
    playerTarget.id = namePlayer + i;
  }
  newPlayerDiv.classList.add("player");
  newPlayerInfo.classList.add("player-info");
  newPlayerScore.classList.add("playerScore");
  newPlayerName.classList.add("playerName", "flex-center");
  newPlayerName.id = namePlayer;
  newPlayerScore.id = namePlayer + "score";

  playerContainer.appendChild(newPlayerDiv);
  newPlayerDiv.prepend(newPlayerInfo);
  newPlayerInfo.appendChild(newPlayerScore);
  newPlayerInfo.appendChild(newPlayerName);
  showPlayerstats(namePlayer);
}

// start btn //
document.getElementById("startgame").addEventListener("click", () => {
  playerList.forEach((player) => addPlayerColum(player.name));
});

function showPlayerstats(namePlayer) {
  document.getElementById(`${namePlayer}`).innerHTML = namePlayer;
  document.getElementById(`${namePlayer + "score"}`).innerHTML = 0;
}

// target Array erstellen und sortieren //
function createCricketArray() {
  const cricket_1 = document.getElementById("t1").value;
  const cricket_2 = document.getElementById("t2").value;
  const cricket_3 = document.getElementById("t3").value;
  const cricket_4 = document.getElementById("t4").value;
  const cricket_5 = document.getElementById("t5").value;
  const cricket_6 = document.getElementById("t6").value;

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
  const score1 = document.getElementById("cricket-score-1");
  const score2 = document.getElementById("cricket-score-2");
  const score3 = document.getElementById("cricket-score-3");
  const score4 = document.getElementById("cricket-score-4");
  const score5 = document.getElementById("cricket-score-5");
  const score6 = document.getElementById("cricket-score-6");

  score1.innerHTML = cricketTargets[0];
  score2.innerHTML = cricketTargets[1];
  score3.innerHTML = cricketTargets[2];
  score4.innerHTML = cricketTargets[3];
  score5.innerHTML = cricketTargets[4];
  score6.innerHTML = cricketTargets[5];
}

function hitTarget(score) {
  currentScore = currentScore + score;
  console.log(currentScore);
}
