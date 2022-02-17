/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


arenaEl.addEventListener('click',function(e){
    //add default function to prevent default actions of web browser, hook onto "e"
    if (e.target.classList.contains('js-ball')) {
    //increase score by 10 when ball is clicked (listener)
    score += 10;
    console.log('we scored');
    if (score < 100) {
        //if score is greater than 10 then user wins the level
        scoreEl.innerText = score; 
    }
    else {
        //function to declare winner so user can move forward in levels
        declareWinner();
    }
    }
});

//define function so declare winner and trigger Winner header to bring up on screen
function declareWinner(){
    document.body.classList.add('game-over');
}