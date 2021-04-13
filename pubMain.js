// window.onload = sendApiRequest; *** deprecated ***
// window.onload = scream.play();

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
const continueBtn = document.getElementById('continue');
const rating = document.getElementById('rating');
const close = document.querySelector('.close');
const difficulty = document.querySelector('#difficulty');
const paras = document.querySelector('p');
const btns = document.querySelector('.answers');
const questionBar = document.querySelector('#question');
const categoryBar = document.querySelector('#category');
const form = document.querySelector('#addToLeaderboard'); 
const restart = document.querySelector('#restart')
const post = document.querySelector('#post')

// grab the answer components
const button1 = document.querySelector('#answer1');
const button2 = document.querySelector('#answer2');
const button3 = document.querySelector('#answer3');
const button4 = document.querySelector('#answer4');
// const react = document.querySelector('.root'); Use a React.js component?

// event listeners
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
restart.addEventListener('click', reload);
continueBtn.addEventListener('click', reset);

////////////////////////////////////////////////////
// send api requests for each category
async function sendApiRequestRandom() {
  // scream.play()
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=11&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove(); // does it look better with the title?
}
//11
async function sendApiRequestFilm() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=11&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
// 12
async function sendApiRequestMusic() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=12&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//14
async function sendApiRequestTv() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=14&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//17
async function sendApiRequestScienceAndNature() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=17&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//20
async function sendApiRequestMythology() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=20&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//21
async function sendApiRequestSport() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=21&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//22
async function sendApiRequestGeography() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=22&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//23
async function sendApiRequestHistory() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=23&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//24
async function sendApiRequestPolitics() {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=1&category=24&difficulty=${rating.value}&type=multiple`,
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
  useApiData(data);
  // title.remove();
}
//////////////////////////////////////////
// api data rendering
function useApiData(data) {
  if (rating.value === 'easy') {
    difficulty.style.backgroundColor = 'green';
  } else if (rating.value === 'medium') {
    difficulty.style.backgroundColor = 'orange';
  } else {
    difficulty.style.backgroundColor = 'red';
  }

  document.querySelector(
    '#category',
  ).innerHTML = `Category: ${data.results[0].category}`;
  document.querySelector(
    '#difficulty',
  ).innerHTML = `Difficulty: ${data.results[0].difficulty}`;
  document.querySelector(
    '#question',
  ).innerHTML = `Question: ${data.results[0].question}`;
  document.querySelector('#answer1').innerHTML = data.results[0].correct_answer;
  document.querySelector('#answer2').innerHTML =
    data.results[0].incorrect_answers[0];
  document.querySelector('#answer3').innerHTML =
    data.results[0].incorrect_answers[1];
  document.querySelector('#answer4').innerHTML =
    data.results[0].incorrect_answers[2];

  // randomise the order of the answers button so that button1 not always correct_answer
  $('.quiz').html(
    $('.quiz')
      .children()
      .sort(function () {
        return 0.5 - Math.random();
      }),
  );

  // This section now no longer needed but I like it and want to fix it at some point.
  // remove a couple of buttons if the question has a boolean mutliple choice answer
  if (
    data.results[0].correct_answer === 'True' ||
    data.results[0].correct_answer === 'False' ||
    data.results[0].incorrect_answers === 'null'
  ) {
    button3.remove();
    button4.remove();
  }
  // Need to restore button3 and button4 after a true or false round!!! They are missing. [UPDATE] This is now deprecated as trueORfalse questions no longer requested from API
}

let correctAnswer = document.getElementById('answer1');
let incorrect_answer = document.getElementById('answer2 answer3 answer4');

// set the initial state of the score/counter
let counter = 0;
// listen for a click on the correctAnswer button
correctAnswer.addEventListener('click', (e) => {
  e.preventDefault();
  // alert('Correct! You are so smart!'); Now deprecated.
  // open modal with 'CORRECT' in green
  document.getElementById('score').click();
  document.querySelector('.scorecard').innerHTML =
    "CORRECT! - Click 'CONTINUE' to select your next category.";
  document.querySelector('.scorecard').style.color = 'green';
  document.querySelector('.scorecard').style.fontSize = '2rem';
  console.log(counter); //call 'addtoDatabase() when it's in the same project file. ------- probably not going to do this. LocalStorage handling the in-game storage. db for leaderboard!

  // add 1 to a score counter. Need to know where to send this and store it between renders. currently going to localStorage. db?
  if (rating.value === 'easy') {
    counter += 1;
  } else if (rating.value === 'medium') {
    counter += 2;
  } else if (rating.value === 'hard') {
    counter += 3;
  }
  // counter++;

  // add a counter to the screen
  document.getElementById('score').innerHTML = localStorage.getItem('score');
  document.getElementById('score').style.color = '#fff';
  document.getElementById('score').style.fontSize = '1.5rem';
  document.getElementById('score').style.textShadow = '1px 1px 1px black';

  // add score/counter to localStorage
  localStorage.setItem('score', counter);

  // reset the page
  setTimeout(() => {
    reset();
  }, 4000);
  // sendApiRequest(); to the same category as the previous question? or delete this function call
});

//listen for a click on the incorrect_answers buttons
button2.addEventListener('click', () => {
  console.log('Incorrect Answer. GAME OVER!');
  button2.style.backgroundColor = 'red';
  setTimeout(() => {
    gameOver();
  }, 1000);
});
button3.addEventListener('click', () => {
  console.log('Incorrect Answer. GAME OVER!');
  button3.style.backgroundColor = 'red';
  setTimeout(() => {
    gameOver();
  }, 1000);
});
button4.addEventListener('click', () => {
  button4.style.backgroundColor = 'red';
  console.log('Incorrect Answer. GAME OVER!');
  setTimeout(() => {
    gameOver();
  }, 1000);
});

function gameOver(data, results) {
  button1.style.backgroundColor = 'green';
  console.log('Game Over!');
  document.getElementById('score').click();
  document.querySelector(
    '.scorecard',
  ).innerHTML = `GAME OVER! You scored: ${counter}`;
  document.querySelector('.scorecard').style.color = 'red';
  document.querySelector('.scorecard').style.fontSize = '3rem';
  continueBtn.remove();
  close.remove();
  setTimeout(() => {
    reload();
  }, 12000);
  // Now we need to add score to leaderboard if higher than other 10. Take from localStorage(?) send to firestore.
}
// load a blank page
function reset() {
  paras.innerText = 'Choose a DIFFICULTY and CATEGORY for your next question';
  button1.innerHTML = '';
  button2.innerHTML = '';
  button3.innerHTML = '';
  button4.innerHTML = '';
  questionBar.innerHTML = '';
  categoryBar.style.backgroundColor = 'yellow';
  categoryBar.style.color = 'red';
  document.getElementById('score').innerHTML = localStorage.getItem('score');
  document.getElementById('score').style.color = '#fff';
  document.getElementById('score').style.fontSize = '1.5rem';
  document.getElementById('score').style.textShadow = '1px 1px 1px black';
}

function reload() {
  //reset localStorage
  localStorage.removeItem('score');
  // reload game
  window.location.reload();
}

// saving data to db
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
    db.collection('high-scores').add({
      name: form.name.value,
      highScore: parseInt(localStorage.getItem('score')),
      email: form.email.value
    });
  
  form.name.value = '';
  form.email.value = '';
})
//////////////////////////// 