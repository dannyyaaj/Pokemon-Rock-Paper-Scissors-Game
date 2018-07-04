let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
let result_div = document.querySelector('p');
const b_div = document.getElementById('b');
const c_div = document.getElementById('c');
const s_div = document.getElementById('s');
let reset = document.getElementById('reset');

function getComputerChoice() {
  const choices = ['b', 'c', 's'];
  const randomNum = (Math.floor(Math.random() * 3));
  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === 'b') return 'Bulbasaur';
  if (letter === 'c') return 'Charmander';
  return 'Squirtle';
}

function resetUserScore() {
  userScore_span.innerHTML = '0 ';
  return userScore = 0;
}

function resetCompScore() {
  compScore_span.innerHTML = ' 0';
  return compScore = 0;
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore + ' ';
  compScore_span.innerHTML = ' ' + compScore;
  const smallUserWord = '(you)'.fontsize(25);
  const smallOppWord = '(opponent)'.fontsize(25);
  result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallOppWord}. You win!`;
}

function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore + ' ';
  compScore_span.innerHTML = ' ' + compScore;
  const smallUserWord = '(you)'.fontsize(25);
  const smallOppWord = '(opponent)'.fontsize(25);
  result_div.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallOppWord}. You lose!`;
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = `It's a draw! You both picked ${convertToWord(userChoice)}`;
}



function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'bs':
    case 'cb':
    case 'sc':
      win(userChoice, computerChoice);
      break;
    case 'sb':
    case 'cs':
    case 'bc':
      lose(userChoice, computerChoice);
      break;
    case 'ss':
    case 'bb':
    case 'cc':
      draw(userChoice, computerChoice);
      break;
  }
}
/* if user clicks on buttons (created in HTML as divs), then will run function game ('div user clicked on')*/
function main() {

  reset.addEventListener('click', function () {
    resetUserScore();
    resetCompScore();
  });

  b_div.addEventListener('click', function () {
    game('b');
  })

  c_div.addEventListener('click', function () {
    game('c');
  })

  s_div.addEventListener('click', function () {
    game('s');
  })

}

main();