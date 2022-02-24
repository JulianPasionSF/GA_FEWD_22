


// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
//pick a random number between 1 and 3
    let computerChoiceInt = Math.random() * 3;
    console.log(computerChoiceInt);
//round that nuber up to the nearest whole number
    computerChoiceInt = Math.ceil(computerChoiceInt);
    console.log(computerChoiceInt);
    
//assign values: rock papaer or  scissors to 1, 2, or 3
        if(computerChoiceInt == 1){
                return "rock";
        }
        else if(computerChoiceInt == 2){
            return "paper";
        }
        else{
            return "scissors";
        }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
    let winner = "";
    if(me == opponent){
        //tie
        winner= "tie";
    }
    else if(me == "rock"){
        //opponent 
            if(opponent == "paper"){
                winner= "opponent";}
            else {winner= "me";}
    }
    else if(me == "paper"){
            if(opponent == "scissors"){
                winner= "opponent";}
            else{winner= "me"}
        }

    else{
        if(opponent == "rock"){
            winner= "opponent"}
        else {
                winner= "me";
            }
        }

        //output to screen
        document.querySelector('#computerSelection').innerText =opponent;
        if(winner == 'me'){
            document.querySelector('#decision').innerText = 'Computers suck, humans FTW!!';
        }
        else if(winner == 'opponent'){
            document.querySelector('#decision').innerText = 'The computer won =(';
        }
        else {
            document.querySelector('#decision').innerText = 'Its a Tie, Yay!';
        }
    };




document.addEventListener('DOMContentLoaded', function(event){

    // Bind (event listener) a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    document.querySelector("#rock").addEventListener("click", function(e){
     
        e.preventDefault();
        let me = "rock";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);
    }); 

    document.querySelector("#paper").addEventListener("click",function(e){

        e.preventDefault();

        let me = "paper";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);
    });

    document.querySelector("#scissors").addEventListener("click",function(e){

        e.preventDefault();

        let me = "scissors";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);
    });

 
});