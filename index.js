let gameLength = 10 //enter here in minutes

let homeScore = 0
let awayScore = 0
let currentWinner = "draw"
let gameStarted = false
let totalSeconds = gameLength * 60
let timerInterval

const homeCounter = document.getElementById("home-score")
const awayCounter = document.getElementById("away-score")
let timer = document.getElementById("timer")

function incrementHome(inc) {
    if (gameStarted) {
    homeScore = homeScore + inc
    homeCounter.textContent = homeScore
    if (homeScore === awayScore) {
        currentWinner = "draw"
        if (awayCounter.classList.contains("winning-board")) {
            awayCounter.classList.remove("winning-board")
        }
    } else if (currentWinner !== "home" && homeScore > awayScore) {
        currentWinner = "home"
        if (!homeCounter.classList.contains("winning-board")) {
            homeCounter.classList.add("winning-board")
            if (awayCounter.classList.contains("winning-board")) {
                awayCounter.classList.remove("winning-board")
            }
        }
    }
    }
}

function incrementAway(inc) {
    if (gameStarted) {
    awayScore = awayScore + inc
    awayCounter.textContent = awayScore
    if (awayScore === homeScore) {
        currentWinner = "draw"
        if (homeCounter.classList.contains("winning-board")) {
            homeCounter.classList.remove("winning-board")
        }
    } else if (currentWinner !== "away" && awayScore > homeScore) {
        currentWinner = "away"
        if (!awayCounter.classList.contains("winning-board")) {
            awayCounter.classList.add("winning-board")
            if (homeCounter.classList.contains("winning-board")) {
                homeCounter.classList.remove("winning-board")
            }
        }
    }
    } 
}

function newGame() {
    homeScore = 0
    awayScore = 0
    totalSeconds = gameLength * 60
    homeCounter.textContent = 0
    awayCounter.textContent = 0
    if (!gameStarted) { 
        gameStarted = true
        document.getElementById("newgame-btn").textContent = "NEW GAME"
    }
    if (currentWinner === "home") {
        homeCounter.classList.remove("winning-board")
    }
    if (currentWinner === "away") {
        awayCounter.classList.remove("winning-board")
    }
    currentWinner = "draw"
    timer.textContent = formatTime(totalSeconds)
    clearInterval(timerInterval)
    timerInterval = setInterval(countdownTimer, 1000)
}

function countdownTimer() {
    totalSeconds--
    timer.textContent = formatTime(totalSeconds)
    if (totalSeconds <= 0) {
        clearInterval(timerInterval)
    }
}

function formatTime(secs) {
    let mins = Math.floor(secs / 60)
    let seconds = secs % 60
    return mins.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0")
}