//HAMBERGER MENU HIDE SCRIPT///////////
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('.nav-item-toggle').addEventListener('click',function(e){
        e.preventDefault();

        let navSet = document.querySelectorAll('.upperheader > nav ul');

        for (let g=0;g<navSet.length;g++){
            navSet[g].classList.toggle('mobile-hide');
        }
});
});



///////ABOUT ME/////////////Fun Facts accordion menu////////////////////
document.addEventListener('DOMContentLoaded', function(event) {
    const expandos = document.querySelectorAll('.expando header');
    
    for (let y=0;y< expandos.length; y++){
        expandos[y].addEventListener('click',function(e){
            e.preventDefault();
            //document.getElementById('factsCharacteristics').classList.toggle('factsAccordionClose');
            this.closest(".expando").classList.toggle('factsAccordionClose');
        });
    }
    
    });
    
    //RPS game (HOME PAGE card 5)
    // a function that determines the computer choice'
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
        
        
        /*a function that compares the user's selection to the computer's selection.
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
    
    /////////////Turn the lights on and off/////////////////////////
    function letThereBeLight() {
        document.querySelector('.ContentBox3').classList.add('turnItOn');
    }
    
    
    function letThereBeDarkness() {
        document.querySelector('.ContentBox3').classList.remove('turnItOn');
    }
    
    //Listeners of the light switch
    
    document.querySelector('#switchOn').addEventListener('click',letThereBeLight);
    document.querySelector('#switchOff').addEventListener('click',letThereBeDarkness);

////////////***/ Color Selector /***/////////////

// Main Page Color Selector//
//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function(event) {
    // Create a function that runs whenever the submit button is clicked

    function readTheColor(e) {
        console.log("im working");

        //prevent the submit button from refreshing the page
e.preventDefault();

let colorSelected = document.querySelector("#color").value;

        //Correct for capitalization
colorSelected = colorSelected.toLowerCase().trim();

        if(colorSelected == "red"){
            document.querySelector(".ContentBox6").setAttribute("class","red");
        }

        if(colorSelected == "green"){
            document.querySelector(".ContentBox6").setAttribute("class","green");
        }

        if(colorSelected == "purple"){
            document.querySelector(".ContentBox6").setAttribute("class","purple");
        }

        if(colorSelected == "pink"){
            document.querySelector(".ContentBox6").setAttribute("class","pink");
        }

        if(colorSelected == "orange"){
            document.querySelector(".ContentBox6").setAttribute("class","orange");
        }

        if(colorSelected == "blue"){
            document.querySelector(".ContentBox6").setAttribute("class","blue");
        }

    };
 
 document.querySelector("#color-submit").addEventListener("click",readTheColor);

});

// Coding page color Selector//
document.addEventListener('DOMContentLoaded', function(event) {
    // Create a function that runs whenever the submit button is clicked

    function readTheColor(e) {
        console.log("im working");

        //prevent the submit button from refreshing the page
e.preventDefault();

let colorSelected = document.querySelector("#color").value;

        //Correct for capitalization
colorSelected = colorSelected.toLowerCase().trim();

        if(colorSelected == "red"){
            document.querySelector(".CodingPageItem6").setAttribute("class","red");
        }

        if(colorSelected == "green"){
            document.querySelector(".CodingPageItem6").setAttribute("class","green");
        }

        if(colorSelected == "purple"){
            document.querySelector(".CodingPageItem6").setAttribute("class","purple");
        }

        if(colorSelected == "pink"){
            document.querySelector(".CodingPageItem6").setAttribute("class","pink");
        }

        if(colorSelected == "orange"){
            document.querySelector(".CodingPageItem6").setAttribute("class","orange");
        }

        if(colorSelected == "blue"){
            document.querySelector(".CodingPageItem6").setAttribute("class","blue");
        }

    };
 
 document.querySelector("#color-submit").addEventListener("click",readTheColor);
});