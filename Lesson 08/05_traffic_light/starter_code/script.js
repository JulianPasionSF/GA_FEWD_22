// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...


//psuedo code//

//click top bulb to turn red
    //target the body
        //create the selector

//click middle bulb to turn yellow- slowButton slowLight
        //target the body
        //create the selector

// click bottom bulb to turn green- goButton goLight
        //target the body
        //create the selector

//reset function

function turnOff(){
    document.querySelector("#stopLight").classList.remove("stop");
    document.querySelector("#slowLight").classList.remove("caution");
    document.querySelector("#goLight").classList.remove("go");
}
///////////

//green//
function go(){
    turnOff();
    document.querySelector("#goLight").classList.add("go");
}


//red//
function stop(){
    turnOff();
    document.querySelector("#stopLight").classList.add("stop");
}

//yellow//

function caution(){
    turnOff();
    document.querySelector("#slowLight").classList.add("caution");
}


//listener//

document.getElementById('goButton').addEventListener('click',go);

document.getElementById('stopButton').addEventListener('click',stop);

document.getElementById('slowButton').addEventListener('click',caution);
