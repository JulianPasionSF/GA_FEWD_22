

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOMContentLoaded');

// Toggle the navigation
document.querySelector('.trulia-nav-toggle').addEventListener('click',function(e){

  e.preventDefault();
  
  //what does the greater than symbol mean in between the trulia-nav and nav ul?//
   let navBarSet = document.querySelectorAll('.trulia-nav > nav ul');

   //Loop//
   //computer says"as long as i's length is greater than 0 interger run this function on loop"
   for(let i=0;i<navBarSet.length;i++){
     navBarSet[i].classList.toggle('trulia-nav-mobilehide');      }
});


//below is the script for expanding cards when clicked //

// Loop through all the cards
for(let x=0;x<truliaCards.length;x++){
  // Add a click listener on each card
  truliaCards[x].addEventListener('click',function(){
      // Remove the featured class
    for (var d =0; d < truliaCards.length; d++){
      truliaCards[d].classList.remove("trulia-featured-grid-item");
    }

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
    });
  }
});

