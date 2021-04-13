// grab elements
const leaderboard = document.querySelector('#leaderboard');

// create element and render leaderboard
function renderLeaderboard(doc) {
  let li = document.createElement('li');
  // let position = document.createElement('p')
  let name = document.createElement('span');
  let highest = document.createElement('span');
  // let cross = document.createElement('div');

 
    
  // set an attribute to this li element (id)
  li.setAttribute('data-id', doc.id);
  
  // set the text content of the span and tags
  //   position.textContent = ??????????
  name.textContent = doc.data().name; // don't forget: data is a method so needs '()'!!! It won't render to screen without this.
  highest.textContent = doc.data().highScore;
  // cross.textContent = 'x';

  // append both of these to the li and then to the document
  //   li.appendChild(position)
  li.appendChild(name);
  li.appendChild(highest);
  // li.appendChild(cross);
  leaderboard.appendChild(li);

  // delete data - not needed but useful to have ICE.
  // cross.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   let id = e.target.parentElement.getAttribute('data-id')
  //   db.collection('leaderboard').doc(id).delete();
  // })
}

// accessing the db collection 'high-scores, getting the data with a promise, THEN using a callback function and passing in the 'snapshot' of data stored in the db we can access all of the data in this collection
db.collection("high-scores").orderBy('highScore', 'desc')
.limit(10)
.get()
.then((snapshot) => {
  // console.log(snapshot.docs) this doesn't show much data. we need to cycle through the docs in the snapshot array
  snapshot.docs.forEach((doc) => {
    console.log(doc.data()); // data() is a method, here
    // call the function to render the doc and pass in the doc
  
    
    renderLeaderboard(doc);
  });
});
// saving data inside an object goes in pubMain.js





