document.addEventListener('DOMContentLoaded', function(event) {

    // when user clicks on the hamburger icon
        document.querySelector(".nav-toggle").addEventListener('click',function(e){
            e.preventDefault();
  
        //prevent the link from working 
            document.querySelector('.main-nav').classList.toggle('main-nav-mobilehide');
            // add or remove the mobile hidle class
        });  
      });