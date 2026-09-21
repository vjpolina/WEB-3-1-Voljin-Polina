const suma=(a,b)=>{
    return a+b;
}

console.log(suma(2,2));
console.log(suma(-100,255));

const elev={
    name: "Polina",
    grade: 12,
    age: 18,
    introduce: ()=>{console.log("Sunt "+ elev.name + " si am "+ elev.age+ " ani.")},
}

elev.introduce();
elev.grade=11;
console.log(elev.grade);

const gameScore={
    player:0,
    computer:0,
    draws:0,

    totalRounds() { return this.player + this.computer + this.draws; },
    displayScore() {
        const message =
        "Scor curent:\n" + "Tu: " + this.player + "\n" + "Calculator: " + this.computer + "\n" + "Egalități: " + this.draws;
        alert(message);
        return message;
    },
    gameReset() {
        this.player=0;
        this.computer=0;
        this.draws=0;
    }
}

const computerMoves=["rock", "paper", "scissors"];
const WINS_TO_FINISH = 5;

const playerButtons = {
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissors: document.getElementById("scissors")
};

const playerChoiceText = document.getElementById("playerChoiceText");
const computerChoiceText = document.getElementById("computerChoiceText");
const gameResultText = document.getElementById("gameResultText");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const drawScoreEl = document.getElementById("drawScore");
const totalRoundsEl = document.getElementById("totalRounds");
const leaderMessageEl = document.getElementById("leaderMessage");
const finalMessageEl = document.getElementById("finalMessage");
const gameResetBtn = document.getElementById("gameReset");

function getComputerChoice() {
    const index = Math.floor(Math.random() * computerMoves.length);
    return computerMoves[index];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameScore.draws++;
        return "draw";
    }
        
    if (playerChoice === "rock" && computerChoice === "scissors" || 
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        gameScore.player++;
        return "win";
    }
    gameScore.computer++;
    return "lose";
}

function showResult(outcome) {
    const texts = {
        win: "Ai câștigat!",
        lose: "Calculatorul a câștigat!",
        draw: "Egalitate!"
    };
    gameResultText.textContent = texts[outcome];
    gameResultText.className = outcome;
}

function updateScoreboard() {
    playerScoreEl.textContent = gameScore.player;
    computerScoreEl.textContent = gameScore.computer;
    drawScoreEl.textContent = gameScore.draws;
    totalRoundsEl.textContent = gameScore.totalRounds();

    if (gameScore.player > gameScore.computer) {
        leaderMessageEl.textContent = "Tu conduci scorul!";
    } else if (gameScore.computer > gameScore.player) {
        leaderMessageEl.textContent = "Calculatorul conduce scorul.";
    } else {
        leaderMessageEl.textContent = "Scorul este egal.";
    }
}

function setButtonsDisabled(disabled) {
    Object.values(playerButtons).forEach(function (btn) {
        btn.disabled = disabled;
    });
}


function checkFinalWinner() {
    if (gameScore.player >= WINS_TO_FINISH) {
        finalMessageEl.textContent = "Ai câștigat jocul!";
    } else if (gameScore.computer >= WINS_TO_FINISH) {
        finalMessageEl.textContent = "Calculatorul a câștigat jocul!";
    } else {return;}
    setButtonsDisabled(true);
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;

    const outcome = determineWinner(playerChoice, computerChoice);
    showResult(outcome);
    updateScoreboard();
    checkFinalWinner();

    setTimeout(function () {
        gameScore.displayScore();
    }, 100);
}

Object.keys(playerButtons).forEach(function (choice) {
    playerButtons[choice].addEventListener("click", function () {
        playRound(choice);
    });
});

gameResetBtn.addEventListener("click", function () {
    gameScore.gameReset();
    updateScoreboard();
    playerChoiceText.textContent = "...";
    computerChoiceText.textContent = "...";
    gameResultText.textContent = "";
    gameResultText.className = "";
    finalMessageEl.textContent = "";
    setButtonsDisabled(false);
});

updateScoreboard();