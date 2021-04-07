// window.onload = sendApiRequest;
// ngrab different btns to send different requests
const title = document.querySelector('#title')
const random = document.querySelector('.random')
const film = document.querySelector('.film')
const music = document.querySelector('.music')
const tv = document.querySelector('.tv')
const scienceAndNature = document.querySelector('.scienceAndNature')
const mythology = document.querySelector('.mythology')
const sport = document.querySelector('.sport')
const geography = document.querySelector('.geography')
const history = document.querySelector('.history')
const politics = document.querySelector('.politics')


// grab the components
const react = document.querySelector('.root');
const button1 = document.querySelector('#answer1');
const button3 = document.querySelector('#answer3');
const button4 = document.querySelector('#answer4');

// add event listeners
random.addEventListener('click', sendApiRequestRandom)
film.addEventListener('click', sendApiRequestFilm)
music.addEventListener('click', sendApiRequestMusic)
tv.addEventListener('click', sendApiRequestTv)
scienceAndNature.addEventListener('click', sendApiRequestScienceAndNature)
mythology.addEventListener('click', sendApiRequestMythology)
sport.addEventListener('click', sendApiRequestSport)
geography.addEventListener('click', sendApiRequestGeography)
history.addEventListener('click', sendApiRequestHistory)
politics.addEventListener('click', sendApiRequestPolitics)


// send api requests
async function sendApiRequestRandom() {
  let res = await fetch('https://opentdb.com/api.php?amount=1');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestFilm() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=11');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestMusic() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=12');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestTv() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=14');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestScienceAndNature() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=17');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestMythology() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=20');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestSport() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=21');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}

async function sendApiRequestGeography() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=22');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestHistory() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=23');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
}
async function sendApiRequestPolitics() {
  let res = await fetch('https://opentdb.com/api.php?amount=1&category=24');
  console.log(res);
  const data = await res.json();
  console.log(data);
  // call the next function
    useApiData(data);
    title.remove()
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
    
  // randomise the order of the button
  var cards = $('.quiz');
  for (var i = 0; i < cards.length; i++) {
    var target = Math.floor(Math.random() * cards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    cards.eq(target).before(cards.eq(target2));
  }

  if (
    data.results[0].correct_answer === 'True' ||
    data.results[0].correct_answer === 'False' || data.results[0].incorrect_answers === 'null'
  ) {
    button3.remove();
    button4.remove();
    }
}

let correctAnswer = document.querySelector('#answer1');


correctAnswer.addEventListener('click', () => {
    alert('Correct! You are so smart!');
    
    // sendApiRequest();
    window.location.reload()
});
