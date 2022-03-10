// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

function turnItGray(){
    //target the body
    //create selector
    document.querySelector('body').classList.add('grayMode');
}

function turnItwhite(){
    //target the body
    //create selector
    document.querySelector('body').classList.remove('grayMode');
}

//listen for gray button

document.querySelector('#grayButton').addEventListener("click",turnItGray);

document.querySelector('#whiteButton').addEventListener("click",turnItwhite);