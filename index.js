/* jshint esversion: 6 */

// button click starts a new roll
document.querySelector('button').addEventListener('click', roll);

function roll() {

  // random dice image for first dice
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);

  var randomImageSource1 = `images/dice${randomNumber1}.png`;

  document.querySelector('#dice1').setAttribute('src', randomImageSource1);

  // random dice image for second dice
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  var randomImageSource2 = `images/dice${randomNumber2}.png`;

  document.querySelector('#dice2').setAttribute('src', randomImageSource2);

  // upddate h1 elements text to read out results
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins!';
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins!';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}
