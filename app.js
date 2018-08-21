var userScore = 0
var computerScore = 0
var userScore_span = document.getElementById("user-score")
var computerScore_span = document.getElementById("computer-score")
var scoreBoard_div = document.querySelector(".score-board")
var result_p = document.querySelector(".result > p")
var rock_div = document.getElementById("r")
var paper_div = document.getElementById("p")
var scissors_div = document.getElementById("s")

function getComputerChoice() {
  const choices = ['r','p','s']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function convertToWord(letter) {
  if (letter === "r")return "Rock"
  if (letter === "p")return "paper"
  return "Scissors"
}


function win(userChoice, computerChoice) {
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)}  Beats  ${convertToWord(computerChoice)}${(smallCompWord)}  You Win!!! `
  // document.getElementById(userChoice)
}

function lose(userChoice, computerChoice) {
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(computerChoice)}${(smallUserWord)}  Losses too  ${convertToWord(userChoice)}${(smallCompWord)}  You Lose!!! `
}

function tie(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(userChoice)}${(smallUserWord)}  And  ${convertToWord(computerChoice)}${(smallCompWord)}  Tie!!! `
}

function game(userChoice) {
  var computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice, computerChoice)
    break
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, computerChoice)
    break
  case "rr":
  case "pp":
  case "ss":
    tie(userChoice, computerChoice)
    break
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r")
    
  })

  paper_div.addEventListener('click', function() {
    game("p")
  })

  scissors_div.addEventListener('click', function() {
    game("s")
  })
}

  main()