// window.onload = sendApiRequest;
// grab different btns to send different requests
const title = document.querySelector('#title');
const random = document.querySelector('.random');
const film = document.querySelector('.film');
const music = document.querySelector('.music');
const tv = document.querySelector('.tv');
const scienceAndNature = document.querySelector('.scienceAndNature');
const mythology = document.querySelector('.mythology');
const sport = document.querySelector('.sport');
const geography = document.querySelector('.geography');
const history = document.querySelector('.history');
const politics = document.querySelector('.politics');
const newGame = document.getElementById('start-new');
// grab the components
// const react = document.querySelector('.root'); not needed?
const button1 = document.querySelector('#answer1');
const button2 = document.querySelector('#answer2');
const button3 = document.querySelector('#answer3');
const button4 = document.querySelector('#answer4');

// add event listeners
random.addEventListener('click', sendApiRequestRandom);
film.addEventListener('click', sendApiRequestFilm);
music.addEventListener('click', sendApiRequestMusic);
tv.addEventListener('click', sendApiRequestTv);
scienceAndNature.addEventListener('click', sendApiRequestScienceAndNature);
mythology.addEventListener('click', sendApiRequestMythology);
sport.addEventListener('click', sendApiRequestSport);
geography.addEventListener('click', sendApiRequestGeography);
history.addEventListener('click', sendApiRequestHistory);
politics.addEventListener('click', sendApiRequestPolitics);
newGame.addEventListener('click', reload);

// send api requests
async function sendApiRequestRandom() {
  let res = await fetch('https://opentdb.com/api.php?amount=1');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestFilm() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=11');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestMusic() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=12');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestTv() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=14');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestScienceAndNature() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=17');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestMythology() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=20');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestSport() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=21');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}

async function sendApiRequestGeography() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=22');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestHistory() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=23');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}
async function sendApiRequestPolitics() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=24');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  title.remove();
}

// api data rendering
function useApiData(data) {
  document.querySelector(
    '#category',
  ).innerHTML = `Category: ${data.results[0].category}`;
  document.querySelector(
    '#difficulty',
  ).innerHTML = `Category: ${data.results[0].difficulty}`;
  document.querySelector(
    '#question',
  ).innerHTML = `Category: ${data.results[0].question}`;
  document.querySelector('#answer1').innerHTML = data.results[0].correct_answer;
  document.querySelector('#answer2').innerHTML =
    data.results[0].incorrect_answers[0];
  document.querySelector('#answer3').innerHTML =
    data.results[0].incorrect_answers[1];
  document.querySelector('#answer4').innerHTML =
    data.results[0].incorrect_answers[2];

  // randomise the order of the answers button
  $('.quiz').html(
    $('.quiz')
      .children()
      .sort(function () {
        return 0.5 - Math.random();
      }),
  );

  if (
    data.results[0].correct_answer === 'True' ||
    data.results[0].correct_answer === 'False' ||
    data.results[0].incorrect_answers === 'null'
  ) {
    button3.remove();
    button4.remove();
  }
}

let correctAnswer = document.getElementById('answer1');
let incorrect_answer = document.getElementById('answer2 answer3 answer4');

// set the initial state of the score/counter
let counter = 0;
// listen for a click on the correctAnswer button
correctAnswer.addEventListener('click', (e) => {
  e.preventDefault();
  // alert('Correct! You are so smart!');
  // open modal with 'CORRECT' in green
  document.getElementById('score').click()
  document.querySelector(
    '.scorecard',
  ).innerHTML = "CORRECT -  use the 'X', top right, to close the pop-up and select a category to continue."
  document.querySelector('.scorecard').style.color = 'green'
  document.querySelector('.scorecard').style.fontSize = '2rem'
  console.log(counter); //call 'addtoDatabase() when it's in the same project file.

  // add 1 to a score counter. Need to know where to send this and store it between renders. db
  counter++;

  // add a counter to the screen
  document.getElementById('score').innerHTML = counter;
  // add score/counter to localStorage
  localStorage.setItem('score', counter);

  // sendApiRequest();
  // window.location.reload() // reload but also call the next question in a function plus add to the score in db
});

//listen for a click on the incorrect_answers buttons
button2.addEventListener('click', () => {
  console.log('Incorrect Answer. GAME OVER!');
  gameOver();
});
button3.addEventListener('click', () => {
  console.log('Incorrect Answer. GAME OVER!');
  gameOver();
});
button4.addEventListener('click', () => {
  console.log('Incorrect Answer. GAME OVER!');
  gameOver();
});

function gameOver() {
  console.log('Game Over!');
  document.getElementById('score').click();
  document.querySelector(
    '.scorecard',
  ).innerHTML = `GAME OVER! You scored: ${counter}`;
  // add score to leaderboard if higher than other 10. Take from localStorage(?) send to firestore.
}

function reload() {
  //reset localStorage
  localStorage.removeItem('score')
  // reload game
  window.location.reload();
}
