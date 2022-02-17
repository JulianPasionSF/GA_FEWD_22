/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


arenaEl.addEventListener('click',function(e){
    //add default function to prevent default actions of web browser, hook onto "e"
    if (e.target.classList.contains('js-ball20')) {
    score += 10;
    console.log('we scored 20 points');
  
    if (e.target.classList.contains('js-ball5')) {
        score += 5;
        console.log('we scored 5 points');

    if (e.target.classList.contains('js-ball10')) {
            score += 10;
            console.log('we scored 10 points');

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