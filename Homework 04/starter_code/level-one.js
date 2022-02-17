/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');



//pseudo code //
//user clicks ball//
ballEl.addEventListener("click", function() {
  
  score += 10;
  console.log("we scored "+ score);
if (score > 100) {
  declareWinner(); 
}

else { 
  scoreEl.innerText = score;
}
});

//user's score increases by 10 if ball is clicked//

//if user's score is equal to or greater than 100, then game is over and user wins//
function declareWinner() {
  document.body.classList.add('game-over');
}